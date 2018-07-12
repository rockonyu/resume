import { Header, Aside, Main, Layout } from './shared';
import * as result from './resume.json';
const resume = (result as any);

const header = Header({
  name: resume.basics.name,
  label: resume.basics.label,
});

const aside = Aside({
  name: resume.basics.name,
  enname: resume.basics.enname,
  mobile: resume.basics.phone,
  email: resume.basics.email,
  languages: resume.languages,
  profiles: resume.basics.profiles,
});

const main = Main({
  summary: resume.basics.summary,
  techs: resume.techs,
  skills: resume.skills,
  daily: resume.daily,
  education: resume.education,
  work: resume.work,
  projects: resume.projects,
});

const styles = require('./css/styles.css').toString();

const page = Layout(
  {
    title: '2017 張瑀的個人履歷',
    body: `
      ${header}
      <div style="display:flex">
        ${aside}
        ${main}
      </div>
    `,
    styles: styles
  }
);

 var fs = require('fs');

 fs.writeFile("./index.html", page, function(err) {
  if(err) {
      return console.log(err);
  }

  console.log("The file was saved!");
});