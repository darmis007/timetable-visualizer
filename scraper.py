import xlrd

path="Tentative Timetable.xlsx"

def get_courses():
    loc = path

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
    loc = path

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
    loc = path

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

def get_course_prof_tuts(return_file = False): 
    wb = xlrd.open_workbook(path)
    sheet = wb.sheet_by_index(0)
    courses_prof_tuts = {}
    for i in range(1,sheet.nrows):
        if sheet.cell_value(i,1)!='':
            key = sheet.cell_value(i,1)
            filler = 'instructors'
            courses_prof_tuts[key] = {}
        if sheet.cell_value(i,2) != '':
            if sheet.cell_value(i,2) != 'Tutorial' and sheet.cell_value(i,2) !='Practical':
                courses_prof_tuts[key]['course_title'] = sheet.cell_value(i,2)
                time = sheet.cell_value(i,10)
            elif sheet.cell_value(i,2) == 'Tutorial':
                filler = 'tutorial_instructors'
                if sheet.cell_value(i,10) != '':
                    time = sheet.cell_value(i,10)
            elif sheet.cell_value(i,2) == 'Practical':
                filler = 'practical_instructor'
                if sheet.cell_value(i,10) != '':
                    time = sheet.cell_value(i,10)
        if filler not in courses_prof_tuts[key]:
            courses_prof_tuts[key][filler] = []
        course_prof_time = []
        course_prof_time.append(sheet.cell_value(i,7))
        course_prof_time.append(time)
        courses_prof_tuts[key][filler].append(course_prof_time)

    file = open('course_prof_tuts_list_comma.txt','w+') 
    file.write(str(courses_prof_tuts))
    file.close()

    if return_file == True:
        return courses_prof_tuts

def get_deps(return_file = False):
    course_list = get_course_prof_tuts(return_file = True)

    deps = []
    for i in course_list.keys():
        subject_code = i.split()[0]
        if subject_code not in deps:
            deps.append(subject_code)
    file = open('dept_list_comma.txt','w+') 
    file.write(str(deps))
    file.close()
    if return_file == True:
        return deps

def get_dept_courses(department='all',return_file=False):
    deps = get_deps(return_file=True)
    courses = get_course_prof_tuts(return_file=True)
    dep_wise_course = {}
    if department == 'all':
        for dep in deps:
            dep_wise_course[dep] = []
            for course_code in courses.keys():
                if str(dep+' ') in course_code:
                    dep_wise_course[dep].append(course_code)
        file = open('all_dept_courses.txt','w+') 
        file.write(str(dep_wise_course))
        file.close()
    elif department in deps:
        dep_wise_course = []
        for course_code in courses.keys():
            if str(department+' ') in course_code:
                dep_wise_course.append(course_code)
        file = open(department+'_courses'+'.txt','w+') 
        file.write(str(dep_wise_course))
        file.close()
    else:
        raise ValueError("Given Department does not exist please choose from 'BIO', 'BIOT', 'BITS', 'CE', 'CHE', 'CHEM', 'CS', 'DE', 'ECON', 'EEE', 'FIN', 'GS', 'HSS', 'INSTR', 'IS', 'ITEB', 'MATH', 'MBA', 'ME', 'MEL', 'MF', 'MSE', 'MUSIC', 'PHA', 'PHY', 'SAN', 'SS' ")

    if return_file == True:
        return dep_wise_course

def get_all_dep_wise_files():
    all_deps = get_deps(return_file = True)
    for dep in all_deps:
        dep_courses = get_dept_courses(department=dep,return_file=True)                

get_dept_courses()


