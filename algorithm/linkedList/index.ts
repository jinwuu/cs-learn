class ListNode {
  val
  next
  constructor(val?, next?) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// 21. 合并两个有序链表
function mergeTwoListsByCirculation(l1: ListNode, l2: ListNode): ListNode {
  let virtualNode = new ListNode()
  let pre = virtualNode
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      pre.next = l1
      l1 = l1.next
    } else {
      pre.next = l2
      l2 = l2.next
    }
    pre = pre.next
  }
  pre.next = l1 || l2
  return virtualNode.next
}

function mergeTwoListsByRecursion(l1: ListNode, l2: ListNode): ListNode {
  if (!l1) {
    return l2
  } else if (!l2) {
    return l1
  } else if (l1.val <= l2.val) {
    l1.next = mergeTwoListsByRecursion(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoListsByRecursion(l1, l2.next)
    return l2
  }
}
