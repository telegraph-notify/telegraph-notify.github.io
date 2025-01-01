import { useState } from "react";
import Layout from "@theme/Layout";
import Member from "../components/HomepageFeatures/Member";

const Team = () => {
  return (
    <Layout>
      <section className="sectionB" id="team">
        <article className="mx-auto flex max-w-6xl flex-col justify-center gap-8 px-6 py-20">
          <h2 className="lp-para mb-2 text-center text-3xl font-semibold tracking-wide text-gray-600 dark:text-gray-300">
            Developed by
          </h2>
          <div className="mx-auto flex flex-col gap-2 md:flex-row md:gap-8">
            <Member
              name="Frances Gray"
              image={"/team/FrancesGit.jpeg"}
              location="Vancouver, Canada"
              github="https://github.com/franceshg"
              linkedin="https://www.linkedin.com/in/frances-h-gray/"
              email="frances.h.gray@gmail.com"
            />
            <Member
              name="Kwang Lee"
              image={"/team/KwangGit.jpeg"}
              location="USA"
              github="https://github.com/kwjolee"
              linkedin="https://www.linkedin.com/in/kwang-lee/"
              email="kwjolee@gmail.com"
            />
            <Member
              name="Erin Olson"
              image={"/team/ErinGit.jpeg"}
              location="Ann Arbor, MI"
              github="https://github.com/erinrolson"
              linkedin="https://www.linkedin.com/in/erinrolson/"
              email="rosemary.erin.o@gmail.com"
            />
            <Member
              name="Chris Shiohama"
              image={"/team/ChrisGit.jpeg"}
              location="Pasadena, CA"
              github="https://github.com/cshio"
              linkedin="https://www.linkedin.com/in/chris-shiohama/"
              email="chris.shiohama@gmail.com"
            />
          </div>
        </article>
      </section>
    </Layout>
  );
};

export default Team;
