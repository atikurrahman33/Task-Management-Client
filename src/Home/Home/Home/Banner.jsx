

const Banner = () => {
    return (
        <div className="py-5">
            <div className="hero h-[500px]" style={{backgroundImage: 'url(https://i.ibb.co/SsM83tw/business-planning-task-management-concept-260nw-1987578881.webp)'}}>
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content ">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold  text-orange-500">Manage Your Task</h1>
      <p className="mb-5 ">Task management involves organizing and prioritizing activities to achieve goals efficiently. It includes setting goals, breaking them into manageable tasks, prioritizing, and scheduling. Effective communication, task tracking, and delegation are crucial for individual and team productivity, with regular reviews ensuring adaptability and success.</p>
      <button className="btn btn-primary bg-red-700">Let’s Explore</button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Banner;