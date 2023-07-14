interface Props {
  title: string
  description: string
  hr?: boolean
}
export default function TitleHeader({ title, description, hr }: Props) {
  return (
    <>
      <div className="mb-4 space-y-1">
        <h1 className="text-2xl font-extrabold text-foreground">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      {hr && <hr className="mb-4" />}
    </>
  )
}
