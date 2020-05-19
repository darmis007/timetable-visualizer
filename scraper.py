import xlrd

def get_courses():
    loc = ("II-Sem-2019_20_20.2.20-pages-10-57-converted.xlsx")

    wb = xlrd.open_workbook(loc)
    sheet = wb.sheet_by_index(0)

    sh = sheet.cell_value(0, 0)

    profs=[]
    for i in range(sheet.nrows):
        profs.append(sheet.cell_value(i, 2))
    print(len(profs))
    prof_set = set(profs)
    list_prof = list(prof_set)
    print(len(list_prof))
    file = open('course_list_comma.txt','w') 
    for name in list_prof:
        file.write("'"+name+"'"+",")
    file.close()


def get_prof_list():
    loc = ("II-Sem-2019_20_20.2.20-pages-10-57-converted.xlsx")

    wb = xlrd.open_workbook(loc)
    sheet = wb.sheet_by_index(0)

    sh = sheet.cell_value(0, 0)

    profs=[]
    for i in range(sheet.nrows):
        profs.append(sheet.cell_value(i, 7))
    print(len(profs))
    prof_set = set(profs)
    list_prof = list(prof_set)
    print(len(list_prof))
    file = open('prof_list_comma.txt','w') 
    for name in list_prof:
        file.write("'"+name+"'"+",")

    file.close() 

def get_classroom_list():
    loc = ("II-Sem-2019_20_20.2.20-pages-10-57-converted.xlsx")

    wb = xlrd.open_workbook(loc)
    sheet = wb.sheet_by_index(0)

    sh = sheet.cell_value(0, 0)

    profs=[]
    for i in range(sheet.nrows):
        profs.append(sheet.cell_value(i, 8))
    print(len(profs))
    prof_set = set(profs)
    list_prof = list(prof_set)
    print(len(list_prof))
    file = open('room_list_comma.txt','w') 
    for name in list_prof:
        file.write("'"+(str(name)).replace('.0','')+"'"+",")

    file.close()
    
get_courses()