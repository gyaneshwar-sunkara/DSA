import BinaryTreeNode from "./BinaryTreeNode";

export default class BinarySearchTree<T> extends BinaryTreeNode<T> {
    
    constructor(value: T | null = null) {
        super(value);
    }

    insert(value: T) {
        if(!this.value) {
            this.value = value;
            return this;
        }

        if(value < this.value) {
            if(this.left) {
               return this.left.insert(this.value);
            }

            const newNode = new BinarySearchTree<T>(value);
            this.setLeft(newNode);

            return newNode;
        }

        if(value > this.value) {
            if(this.right) {
                return this.right.insert(this.value);
             }
 
             const newNode = new BinarySearchTree<T>(value);
             this.setRight(newNode);
 
             return newNode;
        }
    }
};
