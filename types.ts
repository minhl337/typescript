let a: number = 1;
let b: boolean = false;
let c: string = '2';
let e: number[] = [1, 2, 3];
let f: any = [1, 'a', false, {}];

interface Props {
  beans: number;
  address: string;
  rad?: boolean;
}

let alan: Props;

alan = {
  beans: 2,
  address: 'any',
};

// enums

enum Color {
  Red = 0,
  Green = 1,
  Blue = 2,
}

let backGround = Color.Red;
