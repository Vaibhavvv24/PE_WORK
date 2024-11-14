import "./Page1.css";

  const Page1: React.FC = () => {
  

  return (
    <>
    <div><div><nav className="navbar bg-light rounded-pill d-flex justify-content-between " id="id-1"><div className="navbar-brand ms-4">Navbar</div><ul className="navbar-nav d-flex flex-row justify-content-between px-2"><div className="d-flex gap-4 me-4"><li className="nav-item my-auto">Home</li></div></ul></nav></div><div id='id-3' className="border border-2 h-50 w-100 mt-2 p-3"><div><div className="border mb-2" id="id-5">Name</div></div><div><div className="border mb-2" id="id-7">Phone</div></div><div><div className="btn btn-success" id="id-9">Submit</div></div></div></div>
    </>
  );
}

export default Page1;