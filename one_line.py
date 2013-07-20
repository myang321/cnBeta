# make mutil-line javascript to one line
fname='cb_new.js'
fr=file(fname,'r')       
print fname
while True:
    line=fr.readline()
    if len(line)==0:
        break
    print line[:-1],
fr.close()
