import fs from 'fs'
import yaml from 'js-yaml'

const input = fs.readFileSync('./data/cli-docs.yaml', 'utf8')
const docs = yaml.load(input) as Record<string, any>

for (const [slug, cli] of Object.entries(docs)) {
    const lines: string[] = []
    lines.push(`# ${cli.title}\n`)
    lines.push(cli.description + '\n')

    for (const section of cli.sections || []) {
        lines.push(`## ${section.title}\n`)
        for (const cmd of section.commands || []) {
            lines.push(`\`\`\`bash\n${cmd.cmd}\n\`\`\`\n`)
            lines.push(`${cmd.desc}\n`)
        }
    }

    fs.writeFileSync(`./pages/${slug}.mdx`, lines.join('\n'), 'utf8')
}
