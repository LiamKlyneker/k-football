const myHeaders = new Headers();
myHeaders.append('x-apisports-key', 'c5e729901cdca96debe9de6a8171fd8b');

export const requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

export const baseUrl = 'https://v3.football.api-sports.io/teams?league=39&season=2021';
