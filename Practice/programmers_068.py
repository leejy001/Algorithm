def solution(m, musicinfos):
    def tk(string):
        chars = {
            'C#' : 'c',
            'D#' : 'd',
            'F#' : 'f',
            'G#' : 'g',
            'A#' : 'a',
            'E#' : 'e',
            'B#' : 'b'
        }
        melody = []
        for i in range(len(string)-1):
            if string[i+1] == '#':
                melody.append(chars[string[i:i+2]])
            elif string[i] != '#':
                melody.append(string[i])
        if string[i+1] != '#':
            melody.append(string[i+1])
        
        return ''.join(melody)
        
    def sec(t):
        hour, minute = t.split(':')
        return (int(hour)*60)+int(minute)
    
    m = tk(m)
    song = dict()
    for musicinfo in musicinfos:
        start, end, title, melody = musicinfo.split(',')
        start, end, melody = sec(start), sec(end), tk(melody)
        time, n = end - start, len(melody)
        melody = melody * (time//n) + melody[:time%n]
        song[title] = melody
    
    k = v = ''
    for key, value in song.items():
        if (m in value) and (len(v) < len(value)):
            k, v = key, value
    return '(None)' if len(k) == 0 else k