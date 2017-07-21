function getStudents(){
  return fetch(`api/students`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((response) => response.json())
};

function getScores(){
  return fetch(`api/scores`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }).then((response) => response.json())
};

function getStudentsAndScores(){
  return Promise.all([getStudents(), getScores()])
};

function updateScores(scoreId, point){
  return fetch(`api/scores/${scoreId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      point: point
    })
  }).then((response) => response.json())
};

function postScores(scoresArray){
  return fetch(`api/scores`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      scores_array: scoresArray
    })
  })
};

function deleteScores(week){
  return fetch(`delete_latest_week`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      week: week
    })
  });
}

function customDeleteScores(week){
  return fetch(`api/scores/delete_by_week/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      week: week
    })
  }).then((response) => response.json())
}

const Client = {
  getStudentsAndScores,
  updateScores,
  postScores,
  deleteScores,
  customDeleteScores
}

export default Client;
