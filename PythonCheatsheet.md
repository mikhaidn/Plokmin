# Python Cheatsheet

## Data Structures

### Lists and Stringss
Useful Problems:
* https://neetcode.io/problems/string-encode-and-decode (medium)
```python
# Basic sort (returns list of characters)
s = "hello"
sorted_chars = sorted(s)
print(sorted_chars)  # Output: ['e', 'h', 'l', 'l', 'o']

# Join back into string
sorted_string = ''.join(sorted(s))
print(sorted_string)  # Output: 'ehllo'

# Sort in reverse
reverse_sorted = ''.join(sorted(s, reverse=True))
print(reverse_sorted)  # Output: 'ollhe'

# Case-insensitive sort
text = "Hello World"
case_insensitive = ''.join(sorted(text.lower()))
print(case_insensitive)  # Output: 'dehllloorw'

# Sort words in a sentence
sentence = "hello world python"
sorted_words = ' '.join(sorted(sentence.split()))
print(sorted_words)  # Output: 'hello python world'

# Custom sort (example: by length)
words = "apple cat banana"
sorted_by_length = ' '.join(sorted(words.split(), key=len))
print(sorted_by_length)  # Output: 'cat apple banana'


pair.sort(reverse=True)

pair.sort(key=lambda i : i.first) # sort w/ 0th index of tuples i.e [(1, 234)]

genericlist.index()
```



### Sets

The set() function removes all duplicate elements since sets only contain unique values. Some key points:

* Sets are unordered, so the elements may not maintain their original order
* You can also create a set directly using curly braces: my_set = {1, 2, 3}
* Sets are mutable (can be modified) but can only contain immutable elements
```python

# Creating a list
my_list = [1, 2, 2, 3, 3, 4]

# Converting list to set using set() function
my_set = set(my_list)

# Creating two sets inline
A = {1, 2, 3, 4}
B = {3, 4, 5, 6}

# Adding elements
A.add(5)              # Add single element
A.update([6, 7])      # Add multiple elements

# Removing elements
A.remove(5)           # Raises error if element doesn't exist
A.discard(5)          # No error if element doesn't exist
A.pop()               # Remove and return arbitrary element
A.clear()             # Remove all elements

# Set operations
union = A | B         # or A.union(B)
intersection = A & B  # or A.intersection(B)
difference = A - B    # or A.difference(B)
symmetric_diff = A ^ B # or A.symmetric_difference(B)

# Checking membership
if 1 in A:
    print("1 is in set A")

# Set comparisons
subset = A <= B       # or A.issubset(B)
superset = A >= B     # or A.issuperset(B)
disjoint = A.isdisjoint(B)  # True if no common elements

```

### defaultdict
```python
from collections import defaultdict

# Create defaultdict with default type int (starts at 0)
word_count = defaultdict(int)
word_count['hello'] += 1  # No KeyError if 'hello' doesn't exist
print(word_count['hello'])  # Output: 1
print(word_count['unknown'])  # Output: 0 (default value)

# Using list as default_factory
graph = defaultdict(list)
graph[0].append(1)  # No need to initialize empty list first
print(graph[0])  # Output: [1]
print(graph[99])  # Output: [] (empty list)

# Using lambda for custom defaults
d = defaultdict(lambda: "not found")
print(d["anything"])  # Output: "not found"

# Common use case: grouping items
animals = ["cat", "dog", "cat", "bird"]
by_species = defaultdict(list)
for animal in animals:
    by_species[animal].append(animal)
print(dict(by_species))  # Output: {'cat': ['cat', 'cat'], 'dog': ['dog'], 'bird': ['bird']}

# Convert to list and iterate
pairs = list(d.items())
for key, value in pairs:
    print(key, value)

# Direct iteration still works
for key, value in d.items():
    print(key, value)

# If you need index while iterating
for i, (key, value) in enumerate(d.items()):
    print(i, key, value)
```

### Dequeu

```python

from containers import dequeue
# Creating a deque
d = deque([1, 2, 3, 4])

# Adding elements
d.append(5)        # Add to right end: [1, 2, 3, 4, 5]
d.appendleft(0)    # Add to left end: [0, 1, 2, 3, 4, 5]
d.extend([6, 7])   # Extend right end: [0, 1, 2, 3, 4, 5, 6, 7]
d.extendleft([-2, -1])  # Extend left end: [-1, -2, 0, 1, 2, 3, 4, 5, 6, 7]

# Removing elements
d.pop()            # Remove and return rightmost: [-1, -2, 0, 1, 2, 3, 4, 5, 6]
d.popleft()        # Remove and return leftmost: [-2, 0, 1, 2, 3, 4, 5, 6]

# Rotating elements
d.rotate(2)        # Rotate right 2 positions: [5, 6, -2, 0, 1, 2, 3, 4]
d.rotate(-2)       # Rotate left 2 positions: [-2, 0, 1, 2, 3, 4, 5, 6]

# Other useful operations
len(d)             # Get length
d.clear()          # Remove all elements
d.count(2)         # Count occurrences of 2
d.reverse()        # Reverse the deque
```

### Priority Queue (heapq)
Recommended problem: https://neetcode.io/problems/top-k-elements-in-list

Basically `Counter` behind the scenes: https://www.geeksforgeeks.org/counters-in-python-set-1/
```python
import heapq

# Create a priority queue
pq = []

# Add items (automatically maintains heap invariant)
heapq.heappush(pq, 3)
heapq.heappush(pq, 1)
heapq.heappush(pq, 4)

# Get minimum element
min_val = heapq.heappop(pq)  # returns 1

# Peek at minimum without removing
if pq:
    peek = pq[0]  # returns 3

# For custom objects, use tuples with priority
tasks = []
heapq.heappush(tasks, (2, "Medium priority"))
heapq.heappush(tasks, (1, "High priority"))
heapq.heappush(tasks, (3, "Low priority"))

# Process by priority
while tasks:
    priority, task = heapq.heappop(tasks)
    print(f"Processing {task}")

# Create heap from existing list
numbers = [3, 1, 4, 1, 5, 9]
heapq.heapify(numbers)  # converts list in-place to heap

# Get n smallest elements
smallest = heapq.nsmallest(2, numbers)  # returns [1, 1]
```