// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
    let dummy = new SinglyLinkedListNode(0);
    let tail = dummy;
    
    while (head1 !== null && head2 !== null) {
        if (head1.data <= head2.data) {
            tail.next = head1;
            head1 = head1.next;
        } else {
            tail.next = head2;
            head2 = head2.next;
        }
        tail = tail.next;
    }
    
    if (head1 !== null) {
        tail.next = head1;
    } else {
        tail.next = head2;
    }
    
    let head = dummy.next;
    dummy = null; // Help garbage collection by removing reference to dummy node
    
    return head;
    
}
