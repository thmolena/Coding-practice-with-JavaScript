// The following id how linkedList look like in JavaScript

// this shall be the basic of linked Lists in Java

class Node {
    constructor(data,next=null){
        this.data=data;
        this.next=next;
    }
}

// this is how you create nodes
let node1= new Node(5);
let node2= new Node(6);
let node3= new Node(7);
let node4= new Node(8);
let node5= new Node(9);


// connecting the nodes now
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next =node5;

console.log(node1.next.next.data);


// to make it smarter, we can create a LinkedList Class
class LinkedList {
    constructor() {
        this.head=null;
    }
}

const myLinkedList = new LinkedList();
myLinkedList.head=node1;

function printItems(head){ // this is just printing the items in the LinkedList.
    while (head){
        console.log(head.data);
        head= head.next;
    }
}

printItems(myLinkedList.head);