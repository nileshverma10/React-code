export const Profile = () => {
    return (
      <div>
        <form>
          <h2> Name -</h2>
          <input type="text" placeholder="Enter your name" />
          <h2> Age -</h2>
          <input type="number" placeholder="Enter your Age" />
          <h2> Address -</h2>
          <div>
            <input type="text" placeholder="Enter your Address" />
            <h2> Department -</h2>
            <select>
              <option value="QA"> QA</option>
              <option value="Developer"> Developer</option>
              <option value="checker"> checker</option>
            </select>
          </div>
          <h2> Salary -</h2>
          <input type="number" placeholder="Enter your Salary" />
          <h2> Martial Status -</h2>
          <input type="text" placeholder="Enter your Status" />
          <input type="checkbox" /> <h2>Male</h2>
          <input type="checkbox" /> <h2>Female</h2>
        </form>
      </div>
    );
  };
  