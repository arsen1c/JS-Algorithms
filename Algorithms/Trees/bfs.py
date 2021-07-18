''' 
  @Breadth First search
  -> Breadth first search answers 2 questions
    - Is there a path from node A to node B?
    - What is the shortest path from node A to node B?
'''

from collections import deque

graph = {}
graph['you'] = ['alice', 'bob','claire'] # 'you' is an array of all the neighbours
graph['bob'] = ['anuj', 'peggy']
graph['alice'] = ['peggy']
graph['claire'] = ['thom', 'jonny']
# nodes below have no arrows from them to someone else. Directed graph
graph['anuj'] = []
graph['peggy'] = []
graph['thom'] = []
graph['jonny'] = []

def person_is_seller(person):
  return person[-1] == 'm'

def search(name):
  search_queue = deque()
  search_queue += graph[name]
  searched = []
  while search_queue:
    print(search_queue)
    person = search_queue.popleft()
    print(f'Current person: {person}')
    if not person in searched:
      if person_is_seller(person):
        print(f'{person} is a mango seller!')
        return True
      else: 
        search_queue += graph[person]
        searched.append(person)
  return False

search('you')