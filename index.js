class Sibling {
  constructor(name, birthorder) {
    this.name = name;
    this.birthorder = birthorder;
  }

  describe() {
    return `${this.name} is ${this.birthorder}. `;
  }
}

class Family {
  constructor(name) {
    this.name = name;
    this.siblings = [];
    console.log(`This created a family`)
  }

  addSibling(sibling) {
    if (sibling instanceof Sibling) {
      this.siblings.push(sibling);
    } else {
      throw new Error(`Sorry, wrong sibling: ${sibling}`);
    }
  }

  describe() {
    return `${this.name} is made of ${this.siblings.length} kids.`;
  }
}

class Menu {
  constructor() {
    this.families = [];
    this.selectedFamily = null;
  }

  start() {
    console.log("Menu started.");
    let selection = this.showMainMenuOptions();
    while (selection != '0') {
      switch (selection) {
        case '1':
          this.createFamily();
          break;
        case '2':
          this.viewFamily();
          break;
        case '3':
          this.deleteFamily();
          break;
        case '4':
          this.displayFamilies();
          break;
        default:
          selection = this.showMainMenuOptions();
          break;
      }
    }

    console.log('See you later');
  }

  showMainMenuOptions() {
    console.log("Showing Main Menu Options");
    return prompt(`
      0) exit
      1) create new family
      2) view family
      3) delete family
      4) display all families
    `);
  }

  showFamilyMenuOptions(familyInfo) {
    console.log("Showing Main Family Options");
    return prompt(`
      0) back
      1) create sibling
      2) delete sibling
      - - - - - - - - - - -
      ${familyInfo}
    `);
  }

  displayFamilies() {
    console.log("Displaying Families.");
    let familyString = '';
    for (let i = 0; i < this.families.length; i++) {
      familyString += i + ') ' + this.families[i].name + '\n';
    }
    alert(familyString);
  }

  createFamily() {
    console.log("Creating A New Family.");
    let familyName = prompt('Enter the new family name:');
    console.log(`You entered ${familyName}`)
    this.families.push(new Family(familyName));
    console.log(`pushed to list`)
    this.showFamilyMenuOptions()
  }

  viewFamily() {
    console.log("Viewing A Family.");
    let index = prompt('Enter the name of the family you want to view');
    if (index > -1 && index < this.families.length) {
      this.selectedFamily = this.families[index];
      let description = 'Family Name: ' + this.selectedFamily.name + '\n';

      for (let i = 0; i < this.selectedFamily.siblings.length; i++) {
        description += i + ') ' + this.selectedFamily.siblings[i].name +
          ' - ' + this.selectedFamily.siblings[i].birthorder + '\n';
      }

      let selection = this.showFamilyMenuOptions(description);
      switch (selection) {
        case "1":
          this.createSibling();
          break;
        case "2":
          this.deleteSibling();
          break;
      }
    }
  }

  deleteFamily() {
    console.log("Deleting A Family.");
    let index = prompt('Enter the name of the family you want to delete:');
    if (index > -1 && index < this.families.length) {
      this.families.splice(index, 1);
    }
  }

  createSibling() {
    console.log("Creating A New Sibling.");
    let name = prompt('Enter the new sibling name:');
    let birthorder = prompt('Enter the birth order for new sibling:');
    this.selectedFamily.addSibling(new Sibling(name, birthorder));
  }

  deleteSibling() {
    console.log("Deleting A Sibling.");
    let index = prompt('Enter the name of the sibling you want to delete:');
    if (index > -1 && index < this.selectedFamily.siblings.length) {
      this.selectedFamily.siblings.splice(index, 1);
    }
  }
}

let menu = new Menu();
menu.start();

  
  
  
  
  
  
  
  
  
  
  
  