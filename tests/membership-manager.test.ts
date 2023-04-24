import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { MembershipRefunded } from "../generated/schema"
import { MembershipRefunded as MembershipRefundedEvent } from "../generated/MembershipManager/MembershipManager"
import { handleMembershipRefunded } from "../src/membership-manager"
import { createMembershipRefundedEvent } from "./membership-manager-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let user = Address.fromString("0x0000000000000000000000000000000000000001")
    let nftId = BigInt.fromI32(234)
    let amount = BigInt.fromI32(234)
    let newMembershipRefundedEvent = createMembershipRefundedEvent(
      user,
      nftId,
      amount
    )
    handleMembershipRefunded(newMembershipRefundedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("MembershipRefunded created and stored", () => {
    assert.entityCount("MembershipRefunded", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "MembershipRefunded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "user",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "MembershipRefunded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nftId",
      "234"
    )
    assert.fieldEquals(
      "MembershipRefunded",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
