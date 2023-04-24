import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  MembershipRefunded,
  MembershipStarted,
  OwnershipTransferred
} from "../generated/MembershipManager/MembershipManager"

export function createMembershipRefundedEvent(
  user: Address,
  nftId: BigInt,
  amount: BigInt
): MembershipRefunded {
  let membershipRefundedEvent = changetype<MembershipRefunded>(newMockEvent())

  membershipRefundedEvent.parameters = new Array()

  membershipRefundedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  membershipRefundedEvent.parameters.push(
    new ethereum.EventParam("nftId", ethereum.Value.fromUnsignedBigInt(nftId))
  )
  membershipRefundedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return membershipRefundedEvent
}

export function createMembershipStartedEvent(
  user: Address,
  nftId: BigInt
): MembershipStarted {
  let membershipStartedEvent = changetype<MembershipStarted>(newMockEvent())

  membershipStartedEvent.parameters = new Array()

  membershipStartedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  membershipStartedEvent.parameters.push(
    new ethereum.EventParam("nftId", ethereum.Value.fromUnsignedBigInt(nftId))
  )

  return membershipStartedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
