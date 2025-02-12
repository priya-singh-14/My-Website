
// props: title, image path, index

interface ProjectCardProps{
    title: string,
    index: number
}


export default function ProjectCard(props: ProjectCardProps) {
        const colorOptions: string[] = ["bg-cardBlue", "bg-cardGrey", "bg-cardWhite", "bg-cardDarkGrey"];
        const color = colorOptions[props.index] || colorOptions[props.index % colorOptions.length];

        console.log(colorOptions.length)
        return (
            <div>
                <div className={`flex aspect-square ${color}`}>
                </div>
                <h4 className="font-mono text-h4 pt-3">{props.title}</h4> 
            </div>
        );
    }
    