// namespace is the preferred keyword over module
namespace demo_02_03 {

    var person; // Adding ": string: would have shown compile type error
    person = 'Abdullah Khan';
    person.substring(1, 4);

    person = 1;
    person.substring(1, 4);

    person = {
        name: 'Abdullah Khan',
        age: 40
    };
    person.substring(1, 4);
}