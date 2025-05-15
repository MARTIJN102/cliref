import React from 'react'

type Command = {
    cmd: string
    desc: string
}

type Section = {
    title: string
    commands: Command[]
}

type CLIDocsLayoutProps = {
    title: string
    description: string
    sections: Section[]
    children?: React.ReactNode
}

export default function CLIDocsLayout({ title, description, sections }: CLIDocsLayoutProps) {
    return (
        <main>
            <h1>{title}</h1>
            <p>{description}</p>

            {sections.map((section, i) => (
                <section key={i}>
                    <h2>{section.title}</h2>
                    {section.commands.map((cmd, j) => (
                        <div key={j}>
                            <pre><code>{cmd.cmd}</code></pre>
                            <p>{cmd.desc}</p>
                        </div>
                    ))}
                </section>
            ))}
        </main>
    )
}
