const LIBS = [
  {id:"os",name:"os",icon:"⌂",cat:"استاندارد",desc:"کار با سیستم‌عامل، مسیرها، فایل‌ها و پوشه‌ها",tools:[
    ["getcwd()","نمایش مسیر فعلی","os.getcwd()","بدون آرگومان","مسیر پوشه‌ی فعلی را برمی‌گرداند","رشته‌ی مسیر"],
    ["listdir()","نمایش محتویات پوشه","os.listdir(path)","path اختیاری","نام فایل‌ها و پوشه‌ها را می‌گیرد","لیست نام‌ها"],
    ["mkdir()","ساخت یک پوشه","os.mkdir(path)","path","یک پوشه ایجاد می‌کند","پوشه‌ی جدید"],
    ["makedirs()","ساخت پوشه‌های تو‌در‌تو","os.makedirs(path, exist_ok=False)","path, exist_ok","چند سطح پوشه را ایجاد می‌کند","ساختار پوشه"],
    ["remove()","حذف فایل","os.remove(path)","path","یک فایل را حذف می‌کند","بدون خروجی"],
    ["rename()","تغییر نام/مسیر","os.rename(src, dst)","src, dst","فایل یا پوشه را جابه‌جا/نام‌گذاری می‌کند","بدون خروجی"]
  ]},
  {id:"pathlib",name:"pathlib",icon:"◈",cat:"فایل",desc:"کار مدرن و شیءگرا با مسیرها و فایل‌ها",tools:[
    ["Path()","ساخت شیء مسیر","Path(path)","path","یک مسیر قابل پردازش می‌سازد","Path object"],
    ["exists()","بررسی وجود مسیر","Path(path).exists()","—","وجود فایل/پوشه را بررسی می‌کند","True / False"],
    ["glob()","پیدا کردن فایل با الگو","Path(path).glob(pattern)","pattern","فایل‌های مطابق الگو را پیدا می‌کند","iterator"],
    ["read_text()","خواندن متن فایل","Path(path).read_text()","encoding اختیاری","محتوای متنی فایل را می‌خواند","str"],
    ["write_text()","نوشتن متن","Path(path).write_text(text)","text, encoding","متن را در فایل می‌نویسد","تعداد کاراکتر"]
  ]},
  {id:"shutil",name:"shutil",icon:"↔",cat:"فایل",desc:"کپی، جابه‌جایی و مدیریت سطح بالاتر فایل‌ها",tools:[
    ["copy()","کپی فایل","shutil.copy(src, dst)","src, dst","فایل را کپی می‌کند","مسیر مقصد"],
    ["copytree()","کپی یک پوشه","shutil.copytree(src, dst)","src, dst","کل ساختار پوشه را کپی می‌کند","پوشه‌ی جدید"],
    ["move()","جابه‌جایی","shutil.move(src, dst)","src, dst","فایل یا پوشه را منتقل می‌کند","مسیر جدید"],
    ["rmtree()","حذف پوشه و محتویات","shutil.rmtree(path)","path","یک پوشه را همراه محتویات حذف می‌کند","بدون خروجی"],
    ["disk_usage()","اطلاعات فضای دیسک","shutil.disk_usage(path)","path","فضای کل، استفاده‌شده و آزاد را می‌دهد","total/used/free"]
  ]},
  {id:"concurrent.futures",name:"concurrent.futures",icon:"⚡",cat:"هم‌زمانی",desc:"اجرای چند کار به‌صورت هم‌زمان",tools:[
    ["ThreadPoolExecutor","اجرای هم‌زمان کارهای I/O","ThreadPoolExecutor(max_workers=None)","تعداد worker اختیاری","چند کار ورودی/خروجی را هم‌زمان اجرا می‌کند","Futureها"],
    ["ProcessPoolExecutor","اجرای کارهای سنگین CPU","ProcessPoolExecutor(max_workers=None)","تعداد worker اختیاری","کارها را در processهای جدا اجرا می‌کند","Futureها"],
    ["submit()","ارسال یک کار","executor.submit(fn, *args)","تابع + آرگومان‌ها","یک کار را برای اجرا می‌فرستد","Future"],
    ["map()","اجرای تابع روی چند داده","executor.map(fn, iterable)","تابع + داده‌ها","تابع را روی چند ورودی اجرا می‌کند","نتایج ترتیبی"],
    ["result()","دریافت نتیجه","future.result(timeout=None)","timeout اختیاری","نتیجه‌ی کار را دریافت می‌کند","مقدار تابع"]
  ]},
  {id:"hashlib",name:"hashlib",icon:"#",cat:"امنیت",desc:"ساخت hash برای بررسی یکپارچگی و شناسه‌ی داده",tools:[
    ["sha256()","ساخت SHA-256","hashlib.sha256(data)","data به صورت bytes","یک hash 256 بیتی می‌سازد","hash object"],
    ["hexdigest()","نمایش hash به صورت متنی","hash.hexdigest()","—","hash را به رشته‌ی hex تبدیل می‌کند","64 کاراکتر"],
    ["md5()","ساخت MD5","hashlib.md5(data)","bytes","hash قدیمی برای کاربردهای غیرامنیتی","32 کاراکتر hex"]
  ]},
  {id:"openpyxl",name:"openpyxl",icon:"▦",cat:"داده",desc:"خواندن و ساخت فایل‌های Excel با فرمت xlsx",tools:[
    ["Workbook()","ساخت Excel جدید","Workbook()","—","یک workbook تازه می‌سازد","Workbook"],
    ["load_workbook()","باز کردن Excel","load_workbook(filename)","filename","فایل xlsx را باز می‌کند","Workbook"],
    ["active","انتخاب Sheet فعال","workbook.active","—","برگه‌ی فعال را برمی‌گرداند","Worksheet"],
    ["cell()","دسترسی به سلول","sheet.cell(row, column)","row, column","یک سلول مشخص را انتخاب می‌کند","Cell"],
    ["append()","افزودن ردیف","sheet.append(iterable)","لیست/iterable","یک ردیف به انتهای جدول اضافه می‌کند","بدون خروجی"],
    ["save()","ذخیره Excel","workbook.save(filename)","filename","فایل را ذخیره می‌کند","فایل xlsx"]
  ]},
  {id:"pandas",name:"pandas",icon:"▤",cat:"داده",desc:"پردازش و تحلیل داده‌های جدولی",tools:[
    ["read_csv()","خواندن CSV","pd.read_csv(path)","path + options","داده‌ی CSV را به DataFrame تبدیل می‌کند","DataFrame"],
    ["read_excel()","خواندن Excel","pd.read_excel(path)","path + options","داده‌ی Excel را می‌خواند","DataFrame"],
    ["DataFrame()","ساخت جدول داده","pd.DataFrame(data)","data","ساختار جدولی داده می‌سازد","DataFrame"],
    ["head()","نمایش چند ردیف اول","df.head(n=5)","n اختیاری","ابتدای جدول را نمایش می‌دهد","DataFrame"],
    ["drop()","حذف ردیف/ستون","df.drop(labels, axis=0)","labels, axis","بخش‌هایی از جدول را حذف می‌کند","DataFrame"],
    ["sort_values()","مرتب‌سازی داده‌ها","df.sort_values(by)","by + options","داده را بر اساس ستون مرتب می‌کند","DataFrame"],
    ["to_csv()","ذخیره CSV","df.to_csv(path)","path + options","DataFrame را CSV می‌کند","فایل CSV"],
    ["to_excel()","ذخیره Excel","df.to_excel(path)","path + options","DataFrame را Excel می‌کند","فایل xlsx"]
  ]},
  {id:"watchdog",name:"watchdog",icon:"◉",cat:"فایل",desc:"نظارت بر تغییرات فایل‌ها و پوشه‌ها",tools:[
    ["Observer","ایجاد ناظر","Observer()","—","یک ناظر فایل ایجاد می‌کند","Observer"],
    ["FileSystemEventHandler","تعریف واکنش","FileSystemEventHandler","—","رویدادهای فایل را مدیریت می‌کند","handler"],
    ["schedule()","تعیین پوشه برای نظارت","observer.schedule(handler, path, recursive=False)","handler, path, recursive","مسیر و handler را متصل می‌کند","بدون خروجی"],
    ["start()","شروع نظارت","observer.start()","—","نظارت را آغاز می‌کند","thread"],
    ["stop()","توقف نظارت","observer.stop()","—","نظارت را متوقف می‌کند","بدون خروجی"],
    ["join()","منتظر ماندن","observer.join()","—","تا پایان thread صبر می‌کند","بدون خروجی"]
  ]},
  {id:"schedule",name:"schedule",icon:"◷",cat:"زمان",desc:"اجرای خودکار کارها طبق زمان‌بندی",tools:[
    ["every()","تعیین فاصله","schedule.every(interval)","عدد فاصله","فاصله‌ی زمانی اجرای کار را تعیین می‌کند","Job"],
    ["seconds","واحد ثانیه","schedule.every(10).seconds","—","زمان‌بندی بر اساس ثانیه","Job"],
    ["minutes","واحد دقیقه","schedule.every(5).minutes","—","زمان‌بندی بر اساس دقیقه","Job"],
    ["hours","واحد ساعت","schedule.every(2).hours","—","زمان‌بندی بر اساس ساعت","Job"],
    ["days","واحد روز","schedule.every().day","—","زمان‌بندی روزانه","Job"],
    ["do()","تعیین تابع","job.do(fn)","تابع + آرگومان‌ها","مشخص می‌کند چه کاری انجام شود","Job"],
    ["run_pending()","اجرای کارهای موعدرسیده","schedule.run_pending()","—","Jobهای آماده را اجرا می‌کند","بدون خروجی"]
  ]},
  {id:"send2trash",name:"Send2Trash",icon:"♻",cat:"فایل",desc:"انتقال فایل به سطل زباله به‌جای حذف مستقیم",tools:[
    ["send2trash()","انتقال به Recycle Bin / Trash","send2trash(path)","path","فایل یا پوشه را به سطل زباله می‌فرستد","بدون خروجی"]
  ]},
  {id:"fnmatch",name:"fnmatch",icon:"✣",cat:"فایل",desc:"تطبیق نام فایل‌ها با الگوهایی مثل *.txt",tools:[
    ["fnmatch()","تطبیق نام با الگو","fnmatch(name, pattern)","name, pattern","بررسی می‌کند نام با الگو سازگار است یا نه","True / False"],
    ["filter()","فیلتر کردن نام‌ها","filter(names, pattern)","names, pattern","نام‌های مطابق الگو را جدا می‌کند","list"]
  ]},
  {id:"filecmp",name:"filecmp",icon:"≋",cat:"فایل",desc:"مقایسه فایل‌ها و پوشه‌ها",tools:[
    ["cmp()","مقایسه دو فایل","filecmp.cmp(f1, f2)","دو مسیر فایل","برابری محتوا را بررسی می‌کند","True / False"],
    ["cmpfiles()","مقایسه مجموعه فایل‌ها","filecmp.cmpfiles(dir1, dir2, common)","دو پوشه + نام‌ها","فایل‌های مشترک را مقایسه می‌کند","گزارش مقایسه"],
    ["dircmp()","مقایسه دو پوشه","filecmp.dircmp(a, b)","دو مسیر پوشه","تفاوت ساختار دو پوشه را بررسی می‌کند","Dircmp"]
  ]},
  {id:"tempfile",name:"tempfile",icon:"▧",cat:"فایل",desc:"ساخت فایل‌ها و پوشه‌های موقت",tools:[
    ["TemporaryFile()","ساخت فایل موقت","tempfile.TemporaryFile()","options اختیاری","فایل موقتی می‌سازد که بعداً پاک می‌شود","file object"],
    ["NamedTemporaryFile()","فایل موقت با نام","NamedTemporaryFile()","options","فایل موقت قابل نام‌گذاری ایجاد می‌کند","file object"],
    ["TemporaryDirectory()","پوشه موقت","TemporaryDirectory()","options","یک پوشه‌ی موقت می‌سازد","directory path"],
    ["gettempdir()","مسیر پوشه موقت","gettempdir()","—","محل پیش‌فرض فایل‌های موقت را می‌دهد","str"]
  ]},
  {id:"stat",name:"stat",icon:"◫",cat:"فایل",desc:"اطلاعات و ویژگی‌های فایل مانند اندازه و مجوزها",tools:[
    ["stat()","گرفتن اطلاعات فایل","os.stat(path)","path","اطلاعات metadata فایل را می‌گیرد","stat_result"],
    ["S_ISREG()","بررسی فایل معمولی","stat.S_ISREG(mode)","mode","نوع فایل را بررسی می‌کند","True / False"],
    ["S_ISDIR()","بررسی پوشه","stat.S_ISDIR(mode)","mode","تشخیص می‌دهد مسیر پوشه است یا نه","True / False"]
  ]},
  {id:"io",name:"io",icon:"↯",cat:"استاندارد",desc:"کار با جریان‌های داده و خواندن/نوشتن در حافظه",tools:[
    ["StringIO()","جریان متنی در حافظه","io.StringIO(initial_value='')","متن اولیه اختیاری","مثل یک فایل متنی اما در RAM","stream"],
    ["BytesIO()","جریان بایتی در حافظه","io.BytesIO(initial_bytes=b'')","bytes اختیاری","داده‌ی باینری را در RAM نگه می‌دارد","stream"],
    ["read()","خواندن جریان","stream.read(size=-1)","size اختیاری","بخشی یا همه‌ی داده را می‌خواند","str / bytes"],
    ["write()","نوشتن در جریان","stream.write(data)","data","داده را در جریان می‌نویسد","تعداد کاراکتر/بایت"]
  ]},
  {id:"mimetypes",name:"mimetypes",icon:"⊙",cat:"فایل",desc:"تشخیص نوع MIME فایل از روی پسوند",tools:[
    ["guess_type()","تشخیص نوع فایل","mimetypes.guess_type(url)","نام فایل/URL","نوع MIME احتمالی را حدس می‌زند","tuple"],
    ["guess_extension()","حدس پسوند","mimetypes.guess_extension(type)","MIME type","پسوند مناسب یک MIME type را برمی‌گرداند","str"]
  ]},
  {id:"tarfile",name:"tarfile",icon:"▱",cat:"فایل",desc:"ساخت و استخراج آرشیوهای tar",tools:[
    ["open()","باز کردن/ساخت آرشیو","tarfile.open(name, mode)","name, mode","یک آرشیو tar را باز یا ایجاد می‌کند","TarFile"],
    ["add()","افزودن فایل به آرشیو","tar.add(name)","name","فایل/پوشه را وارد آرشیو می‌کند","بدون خروجی"],
    ["extractall()","استخراج آرشیو","tar.extractall(path)","path","محتویات آرشیو را استخراج می‌کند","فایل‌ها"]
  ]},
  {id:"gzip / bz2 / lzma",name:"gzip / bz2 / lzma",icon:"≋",cat:"فشرده‌سازی",desc:"فشرده‌سازی و استخراج با فرمت‌های مختلف",tools:[
    ["gzip.open()","خواندن/نوشتن gzip","gzip.open(filename, mode)","filename, mode","فایل gzip را باز می‌کند","file object"],
    ["bz2.open()","کار با BZ2","bz2.open(filename, mode)","filename, mode","فایل bzip2 را باز می‌کند","file object"],
    ["lzma.open()","کار با LZMA/XZ","lzma.open(filename, mode)","filename, mode","فایل xz/lzma را باز می‌کند","file object"]
  ]},
  {id:"requests",name:"requests",icon:"↯",cat:"وب",desc:"ارسال درخواست HTTP و ارتباط با APIها",tools:[
    ["get()","ارسال GET","requests.get(url, params=None)","url, params و options","داده را از یک URL درخواست می‌کند","Response"],
    ["post()","ارسال POST","requests.post(url, data=None, json=None)","url + data/json","داده را به سرور می‌فرستد","Response"],
    ["status_code","کد وضعیت پاسخ","response.status_code","—","کد HTTP پاسخ را می‌خواند","مثل 200"],
    ["json()","خواندن JSON پاسخ","response.json()","—","بدنه JSON را به Python تبدیل می‌کند","dict/list"]
  ]},
  {id:"argparse",name:"argparse",icon:"›_",cat:"استاندارد",desc:"ساخت ابزارهای خط فرمان و دریافت آرگومان‌ها",tools:[
    ["ArgumentParser()","ساخت parser","argparse.ArgumentParser()","description و options","شیء مدیریت آرگومان‌ها را می‌سازد","ArgumentParser"],
    ["add_argument()","تعریف آرگومان","parser.add_argument(name, ...)","نام + options","یک گزینه‌ی خط فرمان اضافه می‌کند","Action"],
    ["parse_args()","خواندن آرگومان‌ها","parser.parse_args()","—","ورودی خط فرمان را پردازش می‌کند","Namespace"]
  ]},
  {id:"xml.etree.ElementTree",name:"ElementTree",icon:"◇",cat:"داده",desc:"خواندن، ساخت و پردازش XML",tools:[
    ["parse()","خواندن XML از فایل","ET.parse(source)","source","یک فایل XML را parse می‌کند","ElementTree"],
    ["fromstring()","خواندن XML از متن","ET.fromstring(text)","text","رشته XML را به درخت تبدیل می‌کند","Element"],
    ["find()","پیدا کردن عنصر","root.find(match)","الگو","اولین عنصر مطابق را پیدا می‌کند","Element"],
    ["Element()","ساخت عنصر","ET.Element(tag)","tag","یک عنصر XML می‌سازد","Element"]
  ]},
  {id:"configparser",name:"configparser",icon:"⚙",cat:"تنظیمات",desc:"خواندن و مدیریت فایل‌های تنظیمات INI",tools:[
    ["ConfigParser()","ساخت parser تنظیمات","configparser.ConfigParser()","—","یک parser برای INI می‌سازد","ConfigParser"],
    ["read()","خواندن فایل تنظیمات","config.read(filename)","filename","فایل INI را می‌خواند","list"],
    ["get()","گرفتن مقدار","config.get(section, option)","section, option","مقدار یک گزینه را می‌خواند","str"],
    ["set()","تنظیم مقدار","config.set(section, option, value)","سه آرگومان","مقدار یک گزینه را تغییر می‌دهد","بدون خروجی"]
  ]},
  {id:"time",name:"time",icon:"◷",cat:"زمان",desc:"زمان، تأخیر و اندازه‌گیری مدت اجرای کد",tools:[
    ["time()","زمان فعلی Unix","time.time()","—","زمان فعلی را به ثانیه برمی‌گرداند","float"],
    ["sleep()","ایجاد تأخیر","time.sleep(seconds)","seconds","اجرای برنامه را متوقف می‌کند","بدون خروجی"],
    ["perf_counter()","اندازه‌گیری دقیق زمان","time.perf_counter()","—","برای benchmark مناسب است","float"]
  ]},
  {id:"sys / platform",name:"sys / platform",icon:"⌘",cat:"سیستم",desc:"اطلاعات پایتون و سیستم‌عامل",tools:[
    ["sys.version","نسخه Python","sys.version","—","اطلاعات نسخه Python را می‌دهد","str"],
    ["sys.argv","آرگومان‌های اجرا","sys.argv","—","لیست آرگومان‌های خط فرمان","list"],
    ["platform.system()","نام سیستم‌عامل","platform.system()","—","نام OS را برمی‌گرداند","str"],
    ["platform.python_version()","نسخه Python","platform.python_version()","—","نسخه Python را برمی‌گرداند","str"]
  ]},
  {id:"threading / multiprocessing",name:"threading / multiprocessing",icon:"⚙",cat:"هم‌زمانی",desc:"اجرای هم‌زمان کارها در thread و process",tools:[
    ["Thread()","ساخت thread","threading.Thread(target=fn)","target + args","یک thread جدید می‌سازد","Thread"],
    ["start()","شروع thread","thread.start()","—","اجرای thread را آغاز می‌کند","بدون خروجی"],
    ["join()","انتظار برای پایان","thread.join()","timeout اختیاری","منتظر پایان thread می‌ماند","بدون خروجی"],
    ["Process()","ساخت process","multiprocessing.Process(target=fn)","target + args","یک process جدا ایجاد می‌کند","Process"]
  ]},
  {id:"sqlite3",name:"sqlite3",icon:"▣",cat:"داده",desc:"کار با SQLite بدون نیاز به سرور",tools:[
    ["connect()","اتصال به دیتابیس","sqlite3.connect(database)","مسیر دیتابیس","یک اتصال SQLite ایجاد می‌کند","Connection"],
    ["cursor()","ساخت cursor","connection.cursor()","—","برای اجرای SQL استفاده می‌شود","Cursor"],
    ["execute()","اجرای SQL","cursor.execute(sql, params)","SQL + params","یک دستور SQL اجرا می‌کند","Cursor"],
    ["fetchall()","گرفتن نتایج","cursor.fetchall()","—","تمام ردیف‌های نتیجه را می‌گیرد","list"]
  ]},
  {id:"PDF tools",name:"PDF tools",icon:"▤",cat:"اسناد",desc:"خواندن، ویرایش، تبدیل و پردازش PDF",tools:[
    ["PdfReader","خواندن PDF","PdfReader(filename)","filename","PDF را برای خواندن باز می‌کند","Reader"],
    ["PdfWriter","ساخت/ویرایش PDF","PdfWriter()","—","برای ایجاد خروجی PDF استفاده می‌شود","Writer"],
    ["fitz.open()","باز کردن PDF با PyMuPDF","fitz.open(filename)","filename","PDF را برای پردازش باز می‌کند","Document"],
    ["convert_from_path()","تبدیل PDF به تصویر","convert_from_path(pdf_path)","path + options","صفحات PDF را به تصویر تبدیل می‌کند","images"]
  ]},
  {id:"python-docx",name:"python-docx",icon:"W",cat:"اسناد",desc:"ساخت و ویرایش فایل‌های Word",tools:[
    ["Document()","ساخت Word","Document()","—","یک سند Word جدید می‌سازد","Document"],
    ["add_paragraph()","افزودن پاراگراف","document.add_paragraph(text)","text اختیاری","یک پاراگراف اضافه می‌کند","Paragraph"],
    ["add_table()","ساخت جدول","document.add_table(rows, cols)","rows, cols","جدول ایجاد می‌کند","Table"],
    ["save()","ذخیره Word","document.save(path)","path","سند را ذخیره می‌کند","docx"]
  ]},
  {id:"python-pptx",name:"python-pptx",icon:"P",cat:"اسناد",desc:"ساخت و ویرایش PowerPoint",tools:[
    ["Presentation()","ساخت ارائه","Presentation()","template اختیاری","یک ارائه PowerPoint می‌سازد","Presentation"],
    ["add_slide()","افزودن اسلاید","prs.slides.add_slide(layout)","layout","یک اسلاید اضافه می‌کند","Slide"],
    ["add_textbox()","افزودن کادر متن","slide.shapes.add_textbox(...)","مختصات + اندازه","کادر متنی ایجاد می‌کند","Shape"],
    ["save()","ذخیره PowerPoint","prs.save(path)","path","فایل pptx را ذخیره می‌کند","pptx"]
  ]},
  {id:"watchfiles",name:"watchfiles",icon:"◉",cat:"فایل",desc:"راه ساده برای شناسایی تغییرات فایل‌ها و پوشه‌ها",tools:[
    ["watch()","نظارت بر تغییرات","watch(path)","path + options","تغییرات فایل‌ها را دنبال می‌کند","changes"],
    ["Change","نوع تغییر","Change.added / modified / deleted","—","نوع تغییر را مشخص می‌کند","enum"]
  ]},
  {id:"APScheduler",name:"APScheduler",icon:"◷",cat:"زمان",desc:"زمان‌بندی پیشرفته‌ی کارهای خودکار",tools:[
    ["BackgroundScheduler()","ساخت scheduler","BackgroundScheduler()","options","زمان‌بند پس‌زمینه می‌سازد","Scheduler"],
    ["add_job()","افزودن کار زمان‌بندی‌شده","scheduler.add_job(func, trigger, ...)","تابع + trigger + options","یک job را زمان‌بندی می‌کند","Job"],
    ["start()","شروع scheduler","scheduler.start()","—","زمان‌بند را فعال می‌کند","بدون خروجی"],
    ["shutdown()","خاموش کردن","scheduler.shutdown()","wait=True","scheduler را متوقف می‌کند","بدون خروجی"]
  ]},
  {id:"httpx",name:"httpx",icon:"↯",cat:"وب",desc:"درخواست HTTP مدرن به شکل همگام و غیرهمگام",tools:[
    ["get()","GET همگام","httpx.get(url)","url + options","درخواست GET می‌فرستد","Response"],
    ["Client()","کلاینت HTTP","httpx.Client()","options","اتصالات و تنظیمات مشترک را مدیریت می‌کند","Client"],
    ["AsyncClient()","کلاینت async","httpx.AsyncClient()","options","درخواست‌های asynchronous را مدیریت می‌کند","AsyncClient"],
    ["aclose()","بستن کلاینت async","await client.aclose()","—","منابع کلاینت را آزاد می‌کند","بدون خروجی"]
  ]},
  {id:"filelock",name:"filelock",icon:"🔒",cat:"فایل",desc:"جلوگیری از دسترسی هم‌زمان چند برنامه به یک فایل",tools:[
    ["FileLock()","ساخت قفل فایل","FileLock(lock_file)","مسیر فایل قفل","یک قفل برای فایل ایجاد می‌کند","FileLock"],
    ["acquire()","گرفتن قفل","lock.acquire(timeout=-1)","timeout اختیاری","تا گرفتن قفل صبر می‌کند","Lock"],
    ["release()","آزاد کردن قفل","lock.release()","—","قفل را آزاد می‌کند","بدون خروجی"]
  ]}
];

const state={lib:"os",category:"همه",chain:[]};

const $=id=>document.getElementById(id);
const allTools=()=>LIBS.reduce((n,l)=>n+l.tools.length,0);

function init(){
  $("libraryStat").textContent=LIBS.length;
  $("methodStat").textContent=allTools();
  $("toolCount").textContent=LIBS.length;
  renderCategories(); renderNav(); renderCards(); selectLib("os");
  $("startBtn").onclick=()=>{$("explore").scrollIntoView({behavior:"smooth"});};
  $("randomBtn").onclick=()=>selectLib(LIBS[Math.floor(Math.random()*LIBS.length)].id);
  $("clearBuilder").onclick=()=>{state.chain=[];renderChain();};
  $("runChain").onclick=runChain;
  $("copyCode").onclick=copyCode;
  $("modalClose").onclick=closeModal;
  $("modalBackdrop").onclick=e=>{if(e.target.id==="modalBackdrop")closeModal()};
  $("themeBtn").onclick=()=>document.body.classList.toggle("light");
  $("presentBtn").onclick=()=>{document.body.classList.toggle("presentation");toast(document.body.classList.contains("presentation")?"حالت ارائه فعال شد":"حالت عادی فعال شد")};
  $("homeBtn").onclick=()=>window.scrollTo({top:0,behavior:"smooth"});
  $("searchInput").oninput=renderNav;
}
function renderCategories(){
  const cats=["همه",...new Set(LIBS.map(x=>x.cat))];
  $("categoryRow").innerHTML=cats.map(c=>`<button class="cat ${c===state.category?"active":""}" data-cat="${c}">${c}</button>`).join("");
  document.querySelectorAll(".cat").forEach(b=>b.onclick=()=>{state.category=b.dataset.cat;renderCategories();renderNav();renderCards();});
}
function filteredLibs(){
  const q=$("searchInput").value.trim().toLowerCase();
  return LIBS.filter(l=>{
    const catOk=state.category==="همه"||l.cat===state.category;
    const text=(l.name+" "+l.desc+" "+l.tools.map(t=>t.join(" ")).join(" ")).toLowerCase();
    return catOk&&(!q||text.includes(q));
  });
}
function renderNav(){
  const libs=filteredLibs();
  $("libraryNav").innerHTML=libs.map(l=>`<div class="nav-item ${l.id===state.lib?"active":""}" data-id="${l.id}"><span class="nav-icon">${l.icon}</span><span>${l.name}</span></div>`).join("")||`<div class="nav-group-title">موردی پیدا نشد.</div>`;
  document.querySelectorAll(".nav-item").forEach(x=>x.onclick=()=>selectLib(x.dataset.id));
}
function renderCards(){
  const libs=filteredLibs();
  $("libraryGrid").innerHTML=libs.map(l=>`<article class="lib-card" data-id="${l.id}">
    <div class="lib-icon">${l.icon}</div><h3>${l.name}</h3><p>${l.desc}</p><span class="lib-meta">${l.tools.length} ابزار</span>
  </article>`).join("");
  document.querySelectorAll(".lib-card").forEach(x=>x.onclick=()=>selectLib(x.dataset.id));
}
function selectLib(id){
  state.lib=id;
  const l=LIBS.find(x=>x.id===id); if(!l)return;
  $("labTitle").textContent=l.name+" — آزمایشگاه";
  $("toolList").innerHTML=l.tools.map((t,i)=>`<div class="tool-card" data-i="${i}">
    <div><div class="tool-name">${t[0]}</div><div class="tool-desc">${t[1]}</div></div>
    <button class="help-btn" data-help="${i}">?</button>
  </div>`).join("");
  document.querySelectorAll(".tool-card").forEach(c=>c.onclick=e=>{if(e.target.classList.contains("help-btn"))return; addTool(l.tools[+c.dataset.i],l)});
  document.querySelectorAll(".help-btn").forEach(b=>b.onclick=e=>{e.stopPropagation();openModal(l.tools[+b.dataset.help],l)});
  renderNav(); renderCards(); $("labSection").scrollIntoView({behavior:"smooth",block:"start"});
}
function addTool(t,l){state.chain.push({lib:l.name,tool:t});renderChain();if(!statePreview(t,l))preview(t,l)}
function renderChain(){
  const c=$("chain");
  if(!state.chain.length){c.className="chain empty";c.innerHTML=`<div class="empty-chain"><div class="drop-icon">＋</div><b>بلوک‌ها را اینجا جمع کن</b><span>با کلیک روی هر ابزار، یک بلوک به کد اضافه می‌شود.</span></div>`;generateCode();return;}
  c.className="chain";
  c.innerHTML=state.chain.map((x,i)=>`<div class="chain-block"><span class="chain-index">${String(i+1).padStart(2,"0")}</span><code>${escapeHtml(x.tool[2])}</code><button class="remove-block" data-i="${i}">×</button></div>`).join("");
  document.querySelectorAll(".remove-block").forEach(b=>b.onclick=()=>{state.chain.splice(+b.dataset.i,1);renderChain()});
  generateCode();
}
function generateCode(){
  if(!state.chain.length){$("generatedCode").textContent="# برای ساخت کد، یک ابزار انتخاب کنید...";return}
  const imports=new Set(state.chain.map(x=>x.lib).filter(x=>!["os","pathlib"].includes(x)));
  let lines=[...imports].map(x=>`# import ${x}`).concat(["",...state.chain.map(x=>x.tool[2])]);
  $("generatedCode").textContent=lines.join("\n");
}
function preview(t,l){
  const n=t[0];
  let html="";
  if(n==="getcwd()") html=`مسیر فعلی شبیه این است:<br><span class="preview-file">📁 <b>PythonToolkitLab</b> / demo</span>`;
  else if(n==="listdir()") html=`<div class="preview-file">📄 students.csv</div><div class="preview-file">📄 report.xlsx</div><div class="preview-file">📁 data</div><div class="preview-file">📁 output</div>`;
  else if(n.includes("sha256")) html=`<div class="preview-progress"><i></i></div><p>داده‌ی <b>Hello</b> → یک hash با طول ثابت 256-bit</p>`;
  else if(n==="hexdigest()") html=`<code dir="ltr">185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969</code>`;
  else if(["append()","DataFrame()","read_csv()","head()","sort_values()"].includes(n)) html=`<table class="preview-table"><tr><th>name</th><th>score</th><th>city</th></tr><tr><td>Ali</td><td>20</td><td>Tehran</td></tr><tr><td>Sara</td><td>18</td><td>Yazd</td></tr><tr><td>Reza</td><td>19</td><td>Tabriz</td></tr></table>`;
  else if(["Workbook()","load_workbook()","save()"].includes(n)) html=`📊 <b>students.xlsx</b><br><span style="color:#7e8aa5">Sheet1 → 2 rows → saved</span>`;
  else if(n.includes("Observer")||["schedule()","start()","stop()"].includes(n)) html=`👁 ناظر فعال است<br><span style="color:#31d5c8">event: modified → report.xlsx</span>`;
  else if(n==="send2trash()") html=`🗑 <b>old_file.txt</b> → Recycle Bin<br><span style="color:#7e8aa5">فایل حذف دائمی نشده است.</span>`;
  else if(n==="fnmatch()") html=`<code dir="ltr">fnmatch("report.xlsx", "*.xlsx")</code><br>نتیجه: <b style="color:#6ee7d8">True</b>`;
  else if(n==="sleep()") html=`⏱ شبیه‌سازی تأخیر: <b>2 seconds</b><br><div class="preview-progress"><i style="width:35%"></i></div>`;
  else if(n==="platform.system()") html=`سیستم‌عامل: <b>Windows</b>`;
  else if(n==="status_code") html=`HTTP Status: <b style="color:#6ee7d8">200 OK</b>`;
  else if(n==="guess_type()") html=`report.pdf → <b>application/pdf</b>`;
  else if(n==="exists()") html=`Path("report.xlsx").exists() → <b style="color:#6ee7d8">True</b>`;
  else if(n==="disk_usage()") html=`💾 Total: 512 GB &nbsp; Used: 287 GB &nbsp; Free: 225 GB`;
  else if(n==="TemporaryDirectory()") html=`📁 <b>Temp directory</b><br><span style="color:#7e8aa5">فقط برای مدت اجرای برنامه نگه داشته می‌شود.</span>`;
  else if(n==="connect()") html=`🗄 SQLite connection → <b>connected</b>`;
  else if(n==="fetchall()") html=`<table class="preview-table"><tr><th>id</th><th>name</th></tr><tr><td>1</td><td>Ali</td></tr><tr><td>2</td><td>Sara</td></tr></table>`;
  else html=`<div class="preview-file">✓ ${t[1]}</div><br><span style="color:#7e8aa5">این پیش‌نمایش رفتار ابزار را در محیط ارائه شبیه‌سازی می‌کند.</span>`;
  $("resultBody").innerHTML=html;
  $("resultStatus").textContent="اجرا شد ✓";
}
function runChain(){
  if(!state.chain.length){toast("اول چند بلوک به زنجیره اضافه کن.");return}
  $("resultBody").innerHTML=`<div class="preview-progress"><i style="width:100%"></i></div><br>✓ ${state.chain.length} مرحله در زنجیره اجرا شد. نتیجه‌ی هر مرحله در کد ساخته‌شده قابل مشاهده است.`;
  $("resultStatus").textContent="موفق ✓";toast("زنجیره‌ی کد اجرا شد.");
}
function openModal(t,l){
  $("modalTitle").textContent=t[0];$("modalDesc").textContent=t[1];$("modalSignature").textContent=t[2];
  $("modalWhat").textContent=t[1];$("modalArgs").textContent=t[3];$("modalType").textContent=l.name;$("modalOutput").textContent=t[4];
  $("modalBackdrop").classList.add("open");
}
function closeModal(){$("modalBackdrop").classList.remove("open")}
function copyCode(){
  navigator.clipboard?.writeText($("generatedCode").textContent);
  toast("کد کپی شد.");
}
function toast(msg){const t=$("toast");t.textContent=msg;t.classList.add("show");setTimeout(()=>t.classList.remove("show"),1800)}
function escapeHtml(s){return s.replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[m]))}
/* STATEFUL LIVE SIMULATOR */
const VFS={root:{type:"folder",name:"PythonLab",children:[
 {type:"file",name:"photo.jpg",size:"2.4 MB",kind:"image"},
 {type:"file",name:"video.mp4",size:"18.7 MB",kind:"video"},
 {type:"file",name:"report.docx",size:"84 KB",kind:"word"},
 {type:"file",name:"presentation.pptx",size:"1.2 MB",kind:"powerpoint"}
]}};
let selectedPath=null,liveLog=[];
function resetVirtualFS(){VFS.root.children=[
 {type:"file",name:"photo.jpg",size:"2.4 MB",kind:"image"},{type:"file",name:"video.mp4",size:"18.7 MB",kind:"video"},{type:"file",name:"report.docx",size:"84 KB",kind:"word"},{type:"file",name:"presentation.pptx",size:"1.2 MB",kind:"powerpoint"}
];selectedPath=null;liveLog=[];renderFileExplorer();renderLiveLog("محیط نمایشی به حالت اولیه برگشت.");toast("محیط فایل‌ها ریست شد.")}
function iconFor(x){if(x.type==="folder")return "📁";if(x.kind==="image")return "🖼️";if(x.kind==="video")return "🎬";if(x.kind==="word")return "📘";if(x.kind==="powerpoint")return "📙";if(x.kind==="excel")return "📊";return "📄"}
function findChild(n){return VFS.root.children.find(x=>x.name===n)}
function renderFileExplorer(){const el=document.getElementById("liveExplorer");if(!el)return;const a=VFS.root.children;el.innerHTML=`<div class="explorer-head"><div><span class="eyebrow">VIRTUAL FILE EXPLORER</span><b>PythonLab /</b></div><button class="reset-files" type="button" id="resetFiles">↻ بازنشانی</button></div><div class="explorer-toolbar"><span>📁 ${a.filter(x=>x.type==="folder").length} پوشه</span><span>•</span><span>📄 ${a.filter(x=>x.type==="file").length} فایل</span></div><div class="file-grid">${a.map(x=>`<button type="button" class="file-item ${selectedPath===x.name?"selected":""}" data-file="${escapeHtml(x.name)}"><span class="big-file-icon">${iconFor(x)}</span><span class="file-name">${escapeHtml(x.name)}</span><span class="file-meta">${x.type==="folder"?(x.children?.length||0)+" مورد":x.size}</span></button>`).join("")}${a.length===0?'<div class="empty-files">پوشه خالی است.</div>':''}</div>`;document.querySelectorAll(".file-item").forEach(b=>b.onclick=()=>{selectedPath=b.dataset.file;renderFileExplorer();renderLiveLog(`انتخاب شد: ${b.dataset.file}`)});document.getElementById("resetFiles").onclick=resetVirtualFS}
function renderLiveLog(msg){if(msg)liveLog.unshift({time:new Date().toLocaleTimeString("fa-IR",{hour:"2-digit",minute:"2-digit",second:"2-digit"}),msg});const e=document.getElementById("liveLog");if(e)e.innerHTML=liveLog.slice(0,7).map(x=>`<div class="log-line"><span>${x.time}</span><b>${escapeHtml(x.msg)}</b></div>`).join("")||'<div class="empty-log">هنوز دستوری اجرا نشده است.</div>'}
function statePreview(t){const n=t[0];
 if(n==="remove()"){const target=selectedPath||"presentation.pptx",i=VFS.root.children.findIndex(x=>x.name===target);if(i<0){toast("فایل پیدا نشد.");return true}VFS.root.children.splice(i,1);renderFileExplorer();renderLiveLog(`os.remove("${target}") → حذف شد`);$("resultBody").innerHTML=`<div class="live-success">✓ فایل از File Explorer نمایشی حذف شد</div><p><code dir="ltr">os.remove("${escapeHtml(target)}")</code></p><div class="state-count">اکنون ${VFS.root.children.length} آیتم باقی مانده است.</div>`;$("resultStatus").textContent="STATE UPDATED ✓";return true}
 if(n==="mkdir()"||n==="makedirs()"){const name=prompt(n==="mkdir()"?"نام پوشه:":"مسیر پوشه‌های تو‌در‌تو:",n==="mkdir()"?"new_folder":"project/data/output");if(name!==null){let f=VFS.root;for(const part of name.split("/").map(x=>x.trim()).filter(Boolean)){let q=f.children.find(x=>x.type==="folder"&&x.name===part);if(!q){q={type:"folder",name:part,children:[]};f.children.push(q)}f=q}renderFileExplorer();renderLiveLog(`${n} → ${name} ساخته شد`);$("resultBody").innerHTML=`<div class="live-success">📁 ساختار پوشه ساخته شد</div><p><code dir="ltr">os.${n==="mkdir()"?`mkdir("${escapeHtml(name)}")`:`makedirs("${escapeHtml(name)}")`}</code></p>`;$("resultStatus").textContent="FOLDER CREATED ✓"}return true}
 if(n==="rename()"){const target=selectedPath||"presentation.pptx",x=findChild(target);if(!x){toast("اول یک فایل را انتخاب کن.");return true}const name=prompt("نام جدید:",target);if(name&&name.trim()){x.name=name.trim();selectedPath=x.name;renderFileExplorer();renderLiveLog(`${target} → ${x.name}`);$("resultBody").innerHTML=`<div class="live-success">✓ نام فایل تغییر کرد</div><p><code dir="ltr">os.rename("${escapeHtml(target)}","${escapeHtml(x.name)}")</code></p>`;$("resultStatus").textContent="RENAMED ✓"}return true}
 if(n==="listdir()"){$("resultBody").innerHTML=`<div class="state-list">${VFS.root.children.map(x=>`<span>${escapeHtml(x.name)}</span>`).join("")}</div>`;$("resultStatus").textContent="READ STATE ✓";return true}
 if(n==="exists()"){const target=selectedPath||"presentation.pptx";$("resultBody").innerHTML=`<code dir="ltr">Path("${escapeHtml(target)}").exists()</code><br><b class="live-true">${findChild(target)?"True":"False"}</b>`;$("resultStatus").textContent="READ STATE ✓";return true}
 return false}

init();
