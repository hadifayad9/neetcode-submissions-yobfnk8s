function buildGraph(numCourses, prerequisites) {
  const graph = Array.from({ length: numCourses }, () => []);

  for (const [course, prereq] of prerequisites) {
    graph[course].push(prereq);
  }

  return graph;
}

class Solution {
  canFinish(numCourses, prerequisites) {
    const graph = buildGraph(numCourses, prerequisites);
    const visiting = new Set();

    function dfs(course) {
      if (visiting.has(course)) return false;
      if (graph[course].length === 0) return true;

      visiting.add(course);

      for (const prereq of graph[course]) {
        if (!dfs(prereq)) return false;
      }
      visiting.delete(course);
      graph[course] = [];

      return true;
    }

    for (let course = 0; course < numCourses; course++) {
      if (!dfs(course)) return false;
    }

    return true;
  }
}