let message;
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let otherWay = (message as string).endsWith('c');

export {};
