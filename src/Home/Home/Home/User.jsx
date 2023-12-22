

const User = () => {
    return (
        <div className="py-10">
      <div className="text-3xl font-bold pb-5 text-center">
        Some <span className="text-orange-500">Details</span> Of Our User
      </div>
      <div className="stats shadow w-full">

        <div className="stat place-items-center">
          <div className="stat-title font-bold"> Total User</div>
          <div className="stat-value"></div>
        </div>
        <div className="stat place-items-center">
          <div className="stat-title font-bold"> Developers</div>
          <div className="stat-value"></div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title font-bold">Corporate professionals</div>
          <div className="stat-value text-secondary"></div>
        </div>

        <div className="stat place-items-center">
          <div className="stat-title font-bold"> Bankers</div>
          <div className="stat-value">54</div>
        </div>

      </div>

    </div>
    );
};

export default User;