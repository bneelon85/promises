function addTwoNumbers (x,y) {
    var p = new Promise (function (resolve, reject) {
            try{ 
                var sum = x + y;
                resolve(sum);
            } catch (error) {
                reject(error);
            }
            
        
    });
    
    return p;
}




addTwoNumbers(20,8)
.then(function(response) {
    if (isNaN(response)){
    throw 'Inputs must be numeric!';
    } else {
        console.log(response);
    }
})
.catch(function(error) {
    console.log('Inputs must be numeric!')
});
