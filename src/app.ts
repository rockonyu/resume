import * as result from './resume.json';
const resume = (result as any);

import Header from './shared/Header';

const header = Header({
  name: resume.basics.name,
  label: resume.basics.label
});


// const aside = `
//   <div class="aside">
//     <div class="container">
//       <h3 class="title">CONTACT</h3>
//       <ul>
//         <li>
//           <span class="label">Name</span>
//           <span>
//             ${resume.basics.name + ' ' + resume.basics.enname}
//           </span>
//         </li>
//         <li>
//           <span class="label">Mobile</span>
//           <span>
//             ${resume.basics.phone}
//           </span>
//         </li>
//         <li>
//           <span class="label">Email</span>
//           <span>
//             ${resume.basics.email}
//           </span>
//         </li>
//         <li>
//           <span class="label">Skype</span>
//           <span>
//             ${resume.basics.skype}
//           </span>
//         </li>
//       </ul>
//       <h3 class="title">LANGUAGES</h3>
//       <ul>
//         ${
//           resume.languages.map(item => `
//             <li>
//               <span class="label">
//                 ${item.name}
//               </span>
//               <span>
//                 ${item.level}
//               </span>
//             </li>
//           `).join('')
//         }
//       </ul>
//       <h3 class="title">LINKS</h3>
//       ${
//         resume.basics.profiles.map(item => `
//           <a class="btn" href="${item.url}" target="_blank">
//             ${item.network}
//           </a> 
//         `).join('')
//       }
//     </div>
//   </div>
// `;

const main = `
  <div class="main">
    <div class="container">
      <h3 class="title">PROFILE</h3>
      <p>${resume.basics.summary}</p>
      <h3 class="title">SKILL</h3>
      <div class="w33">
        ${
          resume.techs.map(item => `
            <h3 class="bar-title">
              ${item.label}
            </h3>
            <ol>
              ${
                item.names.map(skill => `
                  <li>${skill}</li>
                `).join('')
              }
            </ol>
          `).join('')
        }
      </div>
      <hr/>
      <div class="w50">
        <div v-for="item in resume.skills">
            <h4 class="bar-title" v-text="item.name"></h4>
            <div class="bar">
              <div class="foo" :style="'width:' + item.score + '%'"></div>
            </div>
            <div class="foo-text" v-text="item.level"></div>
        </div>
      </div>
      <div class="w50">
        <div class="pie">
          <div class="pie-rect rect-1"></div>
          <div class="pie-rect rect-2"></div>
          <div class="pie-rect rect-3"></div>
          <div class="pie pie-text">Daily</div>
        </div>
        <ul class="pie-desc">
          <li v-for="item in resume.daily" v-text="item"></li>
        </ul>
      </div>
      <h3 class="title">EDUCATION</h3>
      <div class="work" v-for="item in resume.education">
        <div class="time-flag">
          <span v-text="item.endDate"></span>
          <div class="time-point"></div>
          <p v-text="item.startDate"></p>
        </div>
        <h3 class="label" v-text="item.institution + ' ' +  item.studyType">
        </h3>
        <p v-if="item.summary" v-text="item.summary"></p>
      </div>
      <h3 class="title">WORK</h3>
      <div class="work" v-for="item in resume.work">
        <div class="time-flag">
          <span v-text="item.endDate"></span>
          <div class="time-point"></div>
          <p v-text="item.startDate"></p>
        </div>
        <h3 class="label" v-text="item.position"></h3>
        <h4 class="label" v-text="item.company"></h4>
        <p v-if="item.summary">{{ item.summary }}</p>
      </div>
      <h3 class="title">PROJECTS</h3>
      <div class="work" v-for="item in resume.projects">
        <div class="time-flag">
          <span v-text="item.releaseDate"></span>
          <div class="time-point"></div>
          <p v-text="item.fromDate"></p>
        </div>
        <h3 class="label">
          <a :href="item.website" target="_blank" v-text="item.name"></a>
        </h3>
        <ul>
          <li v-for="highlight in item.highlights" v-text="highlight"></li>
        </ul>
      </div>
    </div>
  </div>
`;



// console.log(aside);