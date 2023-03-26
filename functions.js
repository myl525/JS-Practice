// rest operator, rest parameter, array filter method. 
function getEvenParam(s1, s2, s3, ...sn) {
    const arr = [...arguments];
    const filtered = arr.filter((ele, idx) => {
        if(idx % 2 == 0) {
            return ele;
        }
    });
    console.log(filtered);
}

// rest parameters, array includes, closure
function maybe(fn) {
    return function(...params) {
        if(params.includes(null) || params.includes(undefined)) {
            return undefined;
        }else {
            fn(...params);
        }
    }
}

// array filter, closure
function filterWith(fn) {
    return function(arr) {
        const filtered = arr.filter(fn);
        return filtered;
    }
}

// recursion?
function repeatCall(fn, n, arg) {
    if(n === 0) {
        return;
    }
    repeatCall(fn, n-1, arg);
    fn(arg);
}

// decoractor
function largerFn(fn, gn) {
    return function(f, g) {
        return fn(f) > gn(g) ? fn : gn;
    }
}

// closure
function limitCallsDecorator(fn, n) {
    let count = n;
    return function(...params) {
        if(count === 0) {
            return undefined;
        }
        count--;
        return fn(...params);
    }
}

const limitedParseInt = limitCallsDecorator(parseInt, 3);
console.log(limitedParseInt("423")); // --> 423
console.log(limitedParseInt("423")); // --> 423
console.log(limitedParseInt("423")); // --> 423
console.log(limitedParseInt("423")); // --> undefined