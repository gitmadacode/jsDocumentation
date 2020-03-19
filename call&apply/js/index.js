var obj = {
    name: 'pekora',
    greet: function (age) {
        console.log(arguments);
        console.log('Hola '+this.name+' tu edad es : '+age);
        
    }
}

var person = {
    name: 'kasumi toriyama'
}
obj.greet.call(person,22);
obj.greet.apply(person, [22,23,24,'hello']);