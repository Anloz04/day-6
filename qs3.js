class Person{
    constructor(Name, Deg, Profession, Work, Location, Hobby, Email){

        this.Name = Name;
        this.Deg = Deg; 
        this.Profession = Profession; 
        this.Work = Work;
        this.Location = Location;
        this.Hobby = Hobby;
        this.Email = Email;
    }


    getName(){
        console.log(`Name: ${this.Name}`);
    }

    getDeg(){
        console.log(`Deg: ${this.Deg}`);
    }

    getProfession(){
        console.log(`Profession: ${this.Profession}`);
    }

    getWork(){
        console.log(`Work: ${this.Work}`);
    }

    getLocation(){
        console.log(`Location: ${this.Location}`);
    }

    getHobby(){
        console.log(`Hobby: ${this.Hobby}`);
    }

    getEmail(){
        console.log(`Email: ${this.Email}`);
    }
}


const person1 = new Person("Lokesh", "Engineering.","Free Lancer", "App Developer", "Chennai", "Reading books", "Lokesh41fsd@gmail.com");


person1.getName();
person1.getDeg();
person1.getProfession();
person1.getWork();
person1.getLocation();
person1.getHobby();
person1.getEmail();