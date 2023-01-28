import Debug "mo:base/Debug";
import Int "mo:base/Int";
import Time "mo:base/Time";
import Float "mo:base/Float";



actor Apex {
  stable var currentValue: Nat = 300;
  //currentValue := 100;


  let startTime = Time.now();
  Debug.print(debug_show(startTime));



  //Add Money
  public func topUp(amount: Nat) {
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };



  //Withdrawl Money
  public func withdrawl(amount: Nat) {
    let tempValue: Int = currentValue - amount;
    if (tempValue >= 0) {
      currentValue -= amount;
      Debug.print(debug_show(currentValue));
    } else {
      Debug.print("Amount too large!")
    }
  };


  //Check Balance
  public query func checkBalance(): async Nat {
    return currentValue;
  };

}

