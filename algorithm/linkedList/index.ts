class ListNode {
  val
  next
  constructor(val?, next?) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// 以下为leetcode题目

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

// 83. 删除排序链表中的重复元素
function deleteDuplicatesByCirculation(head: ListNode): ListNode {
  let cur = head
  while (cur?.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next
    } else {
      cur = cur.next
    }
  }
  return head
}

function deleteDuplicatesByRecursion(head: ListNode): ListNode {
  if (!head?.next) return head
  if (head.val === head.next.val) {
    head.next = head.next.next
    deleteDuplicatesByRecursion(head)
  } else {
    deleteDuplicatesByRecursion(head.next)
  }
  return head
}

// 141. 环形链表: 给定一个链表，判断链表中是否有环
function hasCycle(head) {
  let slow = head
  let fast = head?.next
  while (fast?.next) {
    if (fast === slow || fast.next === slow) {
      return true
    }
    fast = fast.next.next
    slow = slow.next
  }
  return false

  // 比较好玩的写法
  // try {
  //   JSON.stringify(head)
  // } catch (e) {
  //   return true
  // }
  // return false
}

// 160. 相交链表: 找到两个单链表相交的起始节点
function getIntersectionNode(headA: ListNode, headB: ListNode): ListNode {
  if (!headA || !headB) return null
  let [pA, pB] = [headA, headB]
  while (pA !== pB) {
    pA = pA ? pA.next : headB
    pB = pB ? pB.next : headA
  }
  return pA
}

// 203. 移除链表元素: 给你一个链表的头节点 head 和一个整数 val ，请你删除链表中所有满足 Node.val == val 的节点，并返回 新的头节点
function removeElementsByCirculation(head: ListNode, val: number): ListNode {
  let vn = new ListNode(0, head)
  let [pre, cur] = [vn, head]
  while (cur) {
    if (cur.val === val) {
      cur = cur.next
      pre.next = cur
    } else {
      pre = cur
      cur = cur.next
    }
  }
  return vn.next
}

function removeElementsByRecursion(head: ListNode, val: number): ListNode {
  let vn = new ListNode(0, head)
  recursion(vn)
  return vn.next

  function recursion(pre: ListNode) {
    if (!pre?.next) return
    if (pre.next.val === val) {
      pre.next = pre.next.next
      recursion(pre)
    } else {
      recursion(pre.next)
    }
  }
}

// 206. 反转链表
function reverseList(head: ListNode): ListNode {
  if (!head?.next) return head
  const tail = reverseList(head.next)
  head.next.next = head
  head.next = null
  return tail
}
