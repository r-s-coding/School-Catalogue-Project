
// Main School Class
class School {
    constructor (name, level, numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name() {
        if (typeof this._name === 'string') {
            return this._name;
        } else {
            console.log('Invalid Name')
        }
    }   
        

    get level() {
        return this._level;
    }

    get numberOfStudents() {
        return this._numberOfStudents;
    }

    set numberOfStudents(newNumberOfStudents) {
        if (typeof newNumberOfStudents === 'number'){
            this._numberOfStudents = newNumberOfStudents;
        } else {
            console.log('Invalid Input');
        }
        
    }

    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
    }

    static pickSubstituteTeacher(substituteTeachers) {
        const randNumber = Math.floor(Math.random()*substituteTeachers.length);
        return substituteTeachers[randNumber];
    }
}

// Primary School Class
class PrimarySchool extends School {
    constructor (name, numberOfStudents, pickupPolicy) {
        super(name, 'primary', numberOfStudents);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

// Middle School Class
class MiddleSchool extends School {
    constructor (name, numberOfStudents) {
        super(name, 'middle', numberOfStudents);
    }
}

// High School Class
class HighSchool extends School {
    constructor (name, numberOfStudents, sportsTeams) {
        super(name, 'high', numberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        return this._sportsTeams;
    }
}



// School catalog for organizing school collections
class SchoolCatalog {
    constructor () {
        this._schoolCollection = {
            'Primary' : [],
            'Middle' : [],
            'High' : []
        }
    }

    get schoolCollection() {
        return this._schoolCollection;
    }

    addSchoolToCollection(newSchool) {
        if (newSchool.name) {
            if (newSchool.level === 'primary') {
                this._schoolCollection.Primary.push(newSchool);
            } else if (newSchool.level === 'middle') {
                this._schoolCollection.Middle.push(newSchool);
            } else if (newSchool.level === 'high') {
                this._schoolCollection.High.push(newSchool);
            } else {
                console.log('Invalid School');
            }
        }
    }
}

