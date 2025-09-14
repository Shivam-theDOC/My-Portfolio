const ShowcaseSection = () => {
  return (
    <div id="work " className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout"></div>
        {/* left */}
        <div className="first-project-wrapper">
          <div className="image-wrapper">
            <img src="/images/project1.png" alt="linkedin-clone" />
            <div className="text-content">
              <h2>project description</h2>
            </div>
          </div>
        </div>
        {/* right */}

        <div className="project-list-wrapper overflow-hidden">
          <div className="project">
            <div className="image-wrapper bg-[#ffefdb]">
              <img src="/images/project2.png" alt="x-clones" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
