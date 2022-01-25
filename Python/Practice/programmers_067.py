def solution(cacheSize, cities):
    answer = 0
    cache = []
    citiess = []
    for city in cities:
        citiess.append(city.lower())
        
    if cacheSize == 0:
        return len(citiess) * 5
    
    for city in citiess:
        if not city in cache:
            if len(cache) < cacheSize:
                cache.append(city)
            else:
                cache.pop(0)
                cache.append(city)
            answer += 5
        else:
            cache.pop(cache.index(city))
            cache.append(city)
            answer += 1
            
    return answer