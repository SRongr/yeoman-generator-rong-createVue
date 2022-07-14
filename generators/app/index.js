const Generator = require("yeoman-generator")

class rongCreateVue extends Generator {

  prompting() {
    return this.prompt([
      {
        type: "list",
        message: "请选择生成类型",
        choices: ["good-vue",  "bed-vue"],
        name: "projectType",
        default: "good-vue"
      },
      {
        type: "input",
        message: "清输入项目名称",
        default: "vue-project",
        name: "projectName"
      }
    ]).then(answers => {
      this.answers = answers
    }) 
  }
  writing() {
    this.fs.copyTpl(
      this.templatePath("vue-template"),
      this.destinationPath(`${this.answers.projectType}`),
      {
        project: this.answers.projectName
      }
    )
  }
}

module.exports = rongCreateVue