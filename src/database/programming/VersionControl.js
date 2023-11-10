import image from "../../assets/code.png";
import vc1c from "../../assets/articleimg/vc1c.png";
import author from "../../assets/authors/jachike.png";
export const VersionControl = {
  id: 2,
  title: "version control",
  category: "coding",
  section: "f",
  coverimg: vc1c,
  description:
    "version control; Git and github- The basic knowledge of version control using git and github",
  author: "Chukwu Jachike Victor",
  authorimg: author,
  link: "/article",
  date: "Nov 27, 2022",
  duration: "9 min read",
  intro: {
    header: "INTRODUCTION",
    content:
      "This article will give you a fundamental idea on version control and collaboration tools like git and github. You will be learning git commands and how to save your codes on online git repositories and other git commands, this is very important during project development. At the end of this course, you will be able to use git for version control.",
    list: [],
    note: {},
    img: [],
  },
  table: {
    header: "Table of content",
    list: [
      { name: "Version control", link: "#sec1" },
      { name: "Git and github", link: "#sec2" },
      { name: "Using git- git commands", link: "#sec3" },
      { name: "Using github and other git commands", link: "#sec4" },
      { name: "Conclusion", link: "#sec5" },
    ],
  },
  resources: [{ header: "", text: "text", link: "" }],
  sections: [
    //sec1
    {
      id: "sec1",
      header: "VERSION CONTROL",
      content:
        'Version control, also known as source control, is the practice of tracking and managing changes to files(source code such as software computer codes) which is very good for code maintainability and safety, to do this, you need a "version control system"',
      list: [],
      note: {},
      img: [],
      //subsections
      subsection: [
        // subsec11
        {
          id: "subsect11",
          header: "VERSION CONTROL SYSTEM ",
          content:
            "This is a system that records changes to a file or a set of files over time in order for you to record the versions of it later. In this tutorial, I will be showing you how to perform version control using a version control system. There are many version control systems, the popular ones we have are; git and Mercury. But in this course, I will be using git and github. Now, let's know about git",
          list: [],
          note: {},
          img: [],
          innersection: [],
        },
      ],
    },
    // sec2
    {
      id: "sec2",
      header: "  GIT AND GITHUB ",
      content: "",
      list: [],
      note: {},
      img: [],
      subsection: [
        //subsec21
        {
          id: "subse21",
          header: "Git",
          content:
            "Git is a popular version control system that is essential for; Tracking code changes, Tracking who made the changes and code collaboration.",
          list: [],
          note: {},
          img: [],
          innersection: [],
        },
        //  subsec22
        {
          id: "subsec22",
          header: "Github",
          content:
            "This is an online hosting platform for version control and code collaboration. It allows a group of people to work together on projects from any where.",
          list: [],
          note: {},
          img: [],
          innersection: [],
        },
        //subsec23
        {
          id: "subsec23",
          header: "Git and Github installation",
          content:
            "In order to fully participate in this tutorial, you need to download and install git and github, and also have a good internet connection and a working laptop. Follow the below link to download and install git and setup a github account.",
          list: [
            "Git download Link-",
            "git-scm.com/downloads",
            "GitHub Link-",
            "github.com",
          ],
          note: {},
          img: [],
          innersection: [],
        },
      ],
    },
    //sec3
    {
      id: "sec3",
      header: "  USING GIT- Basic commands ",
      content:
        "In this section of this course, I will be showing you how to use some basic git commands and as well, tracking, recording and managing your source code.",
      list: [],
      note: {},
      img: [],
      subsection: [
        //subsec31
        {
          id: "subsec31",
          header: "Git configuration",
          content:
            "Now we have installed git, let's check if git is properly installed. Open git and enter the following cammands.",
          list: [
            "*To know the git version installed-",
            "git --version",
            "*To know who we are on git-",
            "git config --global user.name < github username > Example of username: dverybest",

            "git config --global user.email < email you used to register github >Example: johnjack@gmail.com",

            "*Our general information-",
            "git config --global --list",
          ],
          note: {
            header: "Note:",
            text: 'ignore the greater than and less than sign"<>" and examples while typing your commands, it\'s just for instance.',
          },
          img: [],
          innersection: [
            // innersec311
            {
              id: "innersec311",
              header: "",
              content:
                "Now we have configured git, let's know how to use git to track code base or project using the following command prompts. But firstly we need a code editor and also need to create a folder and file that will serve as our project and source code",
              list: [
                "Folder name: git class",

                "File name: index.html",

                "Code editor: visual studio code (recommended).",

                "After opening our project in visual studio code (VSC), we now open the new terminal where our git commands will be entered",
              ],
              note: {},
              img: [],
              subheader: [],
            },
          ],
        },
        // subsec32
        {
          id: "subsec32",
          header: "Basic git commands and their uses",
          content: "",
          list: [
            "git init",
            "Function: first command to tell git to start, to be aware of the file in our folder.",

            "*To use this command-",

            "git init",
            "Note: this our initial command on git",

            "git status",
            "Function: tells the status of our project at any point in time,",

            "*To use this command-",

            "git status",
            "This command shows whether a new modification (change) was made or if the changes are being tracked or not.",

            "git add",
            "Function: For every project in git is of two states;track and untrack state. For track state, the file(s) changes in project folder are already being monitored by git while untrack state is one in which the file changes are not yet been monitored by git, there are already in the project folder but haven't been tracked yet. So to start tracking(monitoring) our charges,",

            "*we need to stage the file using the command",

            "git add < file name >",
            "//Example- git add < index.html >.",

            "*To stage every file in project folder if you we have more one, enter-",

            "git add .",
            "This how to stage our files for every change we make at a point.",

            "git commit",
            "Function: To save change made on your project simply means committing the change, this is very essential for retrieval or removal of changes.",

            "*To comit our changes, We use the git command-",

            'git commit -m "descriptive name"',
            "Example of descriptive name- initial commit. Note- you are to stage a file before committing and also remember commit name for retrieval of changes",

            "git branch",
            'Function: git branch is to hold different copies of your file. So by this, you can have up to three branches. The fourth branch bin git is " branch master" which is our main branch, but we can have other branches and can switch to them. The purpose of the git branch is to keep the original copy of our file safe.',

            "*To create a branch-",

            "git branch",
            "Example of any suitable name: develope",

            "*To switch to a branch-",

            "git checkout < branch name >",
            "Example of branch name: develop",

            "The above commands is all you need to get started with git, now let's go into the advanced side of this course.",
          ],
          note: {},
          img: [],
          innersection: [],
        },
      ],
    },
    //sec4
    {
      id: "sec4",
      header: "USING GITHUB Other git commands ",
      content:
        'In our previous lesson, we talked about basic git commands such as: initializing git, staging and committing files, track and untrack state and git branching.this section is based on GitHub and how to use it to host/push our code base online, do code collaboration and much more.hosting your code online (linking/pushing your local file to a newly created empty repository)Now head to GitHub (your github account) and create a repository by clicking on the button "new", follow the default settings and make it\'s public.Repository name: git-class',
      list: [
        "Note: You will see two option cantaining list of git commands on our newly created empty repository;",

        "(1) Or create a new repository on the command line.",
        "We have already created a repository ❎",

        "(2)Or push an existing repository from the command line",
        "We will be using the commands under this option to push our file to the already created repository ✅. So just copy and paste the commands on your command line terminal",

        "List of commands to host/push your code online:",

        "git remote add",
        "Function: this is the initial step to link our local files to our GitHub online repository",

        "*Command-",

        "git remote add origin < repository URL >",
        'Example of repository URL: github.com/dverybedt(username)/git-class(re.. name). So "origin" in the above command now holds our remote link i.e repository URL. You can setup more than one remote link',

        "*To setup a different remote Link-",

        "git remote add < any suitable name >",
        "Example of any suitable name: GitHub",

        "To check the list of our created remote Link-",

        "git remote -v",
        "This shows remote link that is available",

        "git branch -m",
        'Function: this renames your first branch "master to " main"',

        "*Commands- ",

        "git branch-m main",
        "This automatically renames our master branch to main.",

        "git push -u",
        "Function: this is final command to push our local files to our online repository.",

        "*Command-",

        "git push -u origin main",
        'Note: don\'t miss "origin" because it holds our repository URL, so you enter origin instead f the URL. If you have a different remote link, you can use it. "main" is the name of our branch',

        "Refresh the empty github repository on your browser, it's no longer empty. The code can now be viewed line, if you want someone to help you out just send the URL of the repository if it's public. You're now one to step to code collaboration",
      ],
      note: {},
      img: [],
      subsection: [
        //subsec41
        {
          id: "subsec41",
          header: "The push and pull command",
          content:
            "The idea of this is when you push your code you can pull it as well, in a case where different people are working on a project, they use this commands to retrieve each other's changes:",
          list: [
            "git pull",
            "Function: this is used pull changes from one branch to another",

            "*Command-",

            "git pull < remote link name> < branch name >",
            "Example of remote link is origin and branch name is main",

            "git push",
            "Function: this command is for updating the linked online repository after making changes to our code. *Command-",

            "git push < remote link name> < branch name >",
            "Example of remote link is origin and branch name is main. Yo can create a repository, push and pull code online with the above information and commands",

            "So this how to push and pull our code changes.",
          ],
          note: {},
          img: [],
          innersection: [],
        },
        //subsec42
        {
          id: "subsec42",
          header: "Cloning a repository",
          content:
            'For to access an online repository code that is not yous, you need to to clone it To do this: head to the online repository and click on code to find "clone", under this are many protocols to copy repository link or download the zip file but that\'s not recommended. So go for the https protocol and copy the link. The next step is to create a new folder where the repository file(s) will be placed, open a command line terminal on new folder and enter the command-',
          list: [
            "git clone < the copied link>.git",
            "open the folder now, you will see all the available files you cloned in the folder.",
          ],
          note: {
            header: "Note:",
            text: 'the " .git" in the above command is optional. Remember to do git status to see your code status. Once you clone a project, there no need to initialize (i.e git init), git is already aware . Just start working on it.',
          },
          img: [],
          innersection: [],
        },
        //subsec43
        {
          id: "//subsec43",
          header: "github work flow",
          content:
            "This a group of practices that should be followed when using github, the main two practices are:",
          list: [
            "(1) The main branch should be specified, what is in your main branch should be presentable i.e should not be a work in progress. If anything happens to your sub branches you can check back to your main branch.",

            "(2) Save/commit each reasonable changes you make, don't wait to finish writing your code before you commit. Mostly likely your main code will be on main branch, so before you push, you are to pull from branch main.",
          ],
          note: {
            header: "NOTE:",
            text: "We have many other work flow principles, but this is the main two",
          },
          img: [],
          innersection: [],
        },
        //subsec44
        {
          id: "subsec44",
          header: "Pull request (PR)",
          content:
            'Pull request as the name implies is all about requesting for a code in a branch to be merged to another different branch online. You can do this on GitHub platform by clicking on " pull request", so you will have the base branch where our code will be merged to and the campare branch where we are pulling from. In a situation where you are working with others (reviewers), you might need reviews and approval depending on the argument. Now there are parties in github:',
          list: [
            "Reviewers: they are people you are working with on a project. They review and correct changes and also most importantly, contribute to the project before pulling in the main branch .",

            "Assignee: as the assignee, you will be getting notifications on any review and comment made by the reviewers",
          ],
          note: {},
          img: [],
          innersection: [],
        },
      ],
    },
    //sec5
    {
      id: "sec5",
      header: "Conlusion",
      content:
        "We have covered the basics of git and github. At this point, you will be able to use git for version control.There are other things to do with git like hosting a simple website, adding people to a repository e.t.c, so the journey doesn't end here.",
      list: [],
      note: {},
      img: [],
      subsection: [],
    },
  ],
};

/*




{
    id:"",
    header: "",
    content: "",
    list: [],
    note: { header: "NOTE:", text: "" },
    img: [{ title: "", link: "" }],
    subsection: []
}


*/
