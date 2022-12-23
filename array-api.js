// Q1. make a string out of an array => join()
{
    const fruits = ['apple', 'banana', 'orange'];

    let str='';
    for(fruit of fruits){
        str+=fruit+',';
    }
    console.log(str); 

    let answer = fruits.join();
    console.log(answer); //apple,banana,orange
}

// Q2. make an array out of a string => split()
{
    const fruits = '🍎, 🥝, 🍌, 🍒';

    const arr = fruits.split(',');
    console.log(arr);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1] => reverse()
{
    const array = [1, 2, 3, 4, 5];

    array.reverse();
    console.log(array);
}

// Q4. make new array without the first two elements => slice()
{
    const array = [1, 2, 3, 4, 5];

    //array.splice(0,2);
    //console.log(array); //[3,4,5]

    const newArr = array.slice(2);
    console.log(newArr); //[3,4,5]
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90 => find()
{
    for(stu of students){
        if(stu.score == 90){
            console.log(stu.name);
        }
    }

    const answer = students.find((student) => {
        return student.score === 90;
    });
    console.log(answer);
}

// Q6. make an array of enrolled students => filter()
{
    let arr = [];
    students.forEach((stu) => {
        if(stu.enrolled){
            arr.push(stu);
        }
    })
    console.log(arr);


    const answer = students.filter((student) => student.enrolled);
    console.log(answer);
}

// Q7. make an array containing only the students' scores => map()
// result should be: [45, 80, 90, 66, 88]
{
    let scoreArr = [];
    for(stu of students){
        scoreArr.push(stu.score);
    }
    console.log(scoreArr);


    const answer = students.map((student) => student.score);
    console.log(answer);

}

// Q8. check if there is a student with the score lower than 50 => some()
{
    for(stu of students){
        if(stu.score < 50){
            console.log(stu.name);
        }
    }

    const answer = students.some((studnet) => studnet.score < 50);
    console.log(answer);
}

// Q9. compute students' average score => reduce()
{
    let sum=0;
    for(stu of students){
        sum += Number(stu.score);
    }

    let avg = sum/students.length;
    console.log(avg);

    const answer = students.reduce((prev, curr) => {
        return prev + curr.score;
    }, 0);
    console.log(answer/students.length);

}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    let allScores='';
    for(stu of students){
        allScores += stu.score +',';
    }
    console.log(allScores);


    const answer = students.map((student) => student.score)
                           .join();
    console.log(answer);

}

// Bonus! do Q10 sorted in ascending order => sort()
// result should be: '45, 66, 80, 88, 90'
{
    let arr = ['45', '80', '90', '66', '88'];
    arr.sort();
    console.log(arr);

    const answer = students.map((student) => student.score)
                           .sort()
                           .join();
    console.log(answer);
}