class Stack<T>  {
    private array ;
    constructor(array: T[] = []){
        this.array = array;

    }

    enQueue(args :T){
        return this.array.push(args);
    }

    sizeOf(){
        return this.array.length;
    }

    deQueue(){
        return this.array.pop();
    }

    isEmpty(){
        return this.array.length == 0;
    }

}

const stack = new Stack<number>();

console.log("Is Empty :"+stack.isEmpty());
stack.enQueue(1);
console.log("Size of" + stack.sizeOf());

stack.enQueue(2);
console.log("deque :"+stack.deQueue());
console.log("deque :" + stack.deQueue());

console.log("is empty :"+stack.isEmpty());

const newStack = new Stack<string>(["asfaq", "moideen", "asfaq"])
console.log("new stack :" + newStack.sizeOf());;


