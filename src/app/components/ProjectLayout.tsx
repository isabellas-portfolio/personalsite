export default function ProjectLayout({ project }: any) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16 font-serif">
        <h1 className="text-4xl text-my-gray font-bold mb-2">{project.title}</h1>
        <p className="text-my-pink font-semibold mb-4">{project.tags.join(", ")}</p>
  
        <div className="grid md:grid-cols-2 gap-10 text-my-gray">
          <div>
            <h2 className="text-lg font-bold">Project Overview</h2>
            <p className="text-sm mt-1">{project.overview}</p>
          </div>
  
          <div>
            <h2 className="text-lg font-bold">Role</h2>
            <p className="text-sm">{project.role}</p>
  
            <h2 className="text-lg font-bold mt-4">Partner</h2>
            <p className="text-sm">{project.partner}</p>
  
            <h2 className="text-lg font-bold mt-4">Timeline</h2>
            <p className="text-sm">{project.timeline}</p>
          </div>
        </div>
  
        <h2 className="text-lg font-bold mt-10 mb-2">Key Responsibilities</h2>
        <ul className="list-disc list-inside text-sm space-y-1 text-my-gray">
          {project.responsibilities.map((item: string, idx: number) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
  