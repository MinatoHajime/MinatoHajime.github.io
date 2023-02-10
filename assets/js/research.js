/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Web Development",
    authors:
      "We create maintainable websites that you can adjust as you grow.",
    conferences:
      "• Product strategy  • UX/UI design • Wordpress development • HTML, CSS, JavaScript development • CMS configuration • 3D website development • React, Vue.js, Next.js, Angular development • PHP development • Custom plug-in development • Web hosting &amp; Operations   ",
    researchYr: "",
    citebox: "popup1",
    image: "assets/images/research-page/website.webp",
    citation: {
      vancouver:
        "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 1",
    absbox: "absPopup1",
  },

  {
    title: "Mobile App Development",
    authors:
      "We build mobile apps that drive impact.",
    conferences:
      "• Product strategy • UX research • UX/UI design • iOS development • Android development • Cross-platform development • Backend development • Dashboard development • Play Store submission • App Store submission  • Automated testing • Dev-ops",
    researchYr: "",
    citebox: "popup2",
    image: "assets/images/research-page/mobile.webp",
    citation: {
      vancouver:
        "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 2",
    absbox: "absPopup2",
  },

  {
    title:
      "Android App Development",
    authors: "We develop beautiful, user-tailored Android Apps.",
    conferences:
      "• Product strategy • Kotlin development • Java development • Dackend development • Dashboard development • Play Store submission • Automated testing • Dev-ops            ",
    researchYr: "",
    citebox: "popup3",
    image: "assets/images/research-page/android.webp",
    citation: {
      vancouver:
        "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 3",
    absbox: "absPopup3",
  },

  {
    title:
      "iOS App Development",
    authors:
      "We craft iOS Apps tailor-made for your users.",
    conferences:
      "• Swift development • Backend development • Dashboard development • App Store submission • Automated testing • Dev-ops",
    researchYr: "",
    citebox: "popup4",
    image: "assets/images/research-page/ios.webp",
    citation: {
      vancouver:
        "Yong Shan, Zekang Li, Jinchao Zhang, Fandong Meng, Yang Feng, Cheng Niu and Jie Zhou. A Contextual Hierarchical Attention Network with Adaptive Objective for Dialogue State Tracking. The 58th Annual Meeting of the Association for Computational Linguistics 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 4",
    absbox: "absPopup4",
  },

  {
    title: "Custom Software Development",
    authors: "We build custom software precisely for your needs.",
    conferences:
      "• Product strategy • Code review & Audit • Technical consulting • Frontend development • Backend development • Automated testing • Dev-ops",
    researchYr: "",
    citebox: "popup5",
    image: "assets/images/research-page/custom.webp",
    citation: {
      vancouver:
        "Wang, Li and Li, Dong and Zhu, Yousong and Tian, Lu and Shan, Yi. Dual Super-Resolution Learning for Semantic Segmentation. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 5",
    absbox: "absPopup5",
  },
  {
    title:
      "Blockchain, NFT Development",
    authors: "We build websites and Android & iOS applications on various blockchains.",
    conferences:
      "• CEX • DEX • DAO • Smart Contract • Web3 integration • NFT Marketplace • NFT Game",
    researchYr: "",
    citebox: "popup7",
    image: "assets/images/research-page/block.webp",
    citation: {
      vancouver:
        "Liu, Yunfei and Li, Yu and You, Shaodi and Lu, Feng. Unsupervised Learning for Intrinsic Image Decomposition From a Single Image. IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR) 2020.",
    },
    abstract:
      "This is currently left empty and this can be considered as a dummy data 7",
    absbox: "absPopup7",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                  
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);