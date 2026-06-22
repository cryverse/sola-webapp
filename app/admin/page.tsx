export default function AdminPage() {
  return (
    <main className="container py-10">
      <h1 className="text-3xl font-bold mb-6">
        Admin Panel
      </h1>

      <div className="grid md:grid-cols-3 gap-4">

        <a className="card" href="/admin/users">
          Users
        </a>

        <a className="card" href="/admin/lessons">
          Lessons
        </a>

        <a className="card" href="/admin/partners">
          Partners
        </a>

      </div>
    </main>
  );
}