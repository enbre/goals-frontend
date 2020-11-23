const URL = "http://localhost:4000"



export default class GoalModel {
  static all = () => {
    return fetch(`${URL}/goals`).then(res => res.json())
  }


  static create(goalData) {
    return fetch(`${URL}/goals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(goalData)
    }).then(res => res.json())
  }


  static update = async (goal) => {
    
    const res = await fetch(`${URL}/goals/${goal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(goal)
    })
    return res.json()
  }

  static delete = (goalId) => {
    return fetch(`${URL}/goals/${goalId}`, {
      method: "DELETE",
    })
      .then(res => res.json())
  }

}