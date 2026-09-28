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
    ["write_text()","نوشتن متن فایل","Path(path).write_text(text)","text, encoding","متن را در فایل می‌نویسد","تعداد کاراکتر"]
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

/* ابزارهای تکمیلی */
const EXTRA_TOOLS = {

"os":[
["chdir()","تغییر پوشه‌ی فعلی","os.chdir(path)","path","مسیر کاری برنامه را تغییر می‌دهد","بدون خروجی"],
["getenv()","خواندن متغیر محیطی","os.getenv(key, default=None)","key, default","مقدار یک environment variable را می‌خواند","str / None"],
["putenv()","تنظیم متغیر محیطی","os.putenv(key, value)","key, value","یک متغیر محیطی را تنظیم می‌کند","بدون خروجی"],
["environ","دسترسی به متغیرهای محیطی","os.environ","—","مجموعه متغیرهای محیطی را در اختیار می‌گذارد","mapping"],
["walk()","پیمایش بازگشتی پوشه‌ها","os.walk(top)","top","فایل‌ها و پوشه‌های زیرشاخه را پیمایش می‌کند","iterator"],
["scandir()","خواندن سریع محتویات پوشه","os.scandir(path)","path","ورودی‌های یک پوشه را به شکل DirEntry می‌دهد","iterator"],
["rmdir()","حذف پوشه‌ی خالی","os.rmdir(path)","path","یک پوشه‌ی خالی را حذف می‌کند","بدون خروجی"],
["replace()","جایگزینی فایل یا مسیر","os.replace(src, dst)","src, dst","مسیر مقصد را با منبع جایگزین می‌کند","بدون خروجی"],
["system()","اجرای فرمان سیستم","os.system(command)","command","یک فرمان را در shell اجرا می‌کند","کد بازگشت"],
["cpu_count()","تعداد هسته‌های پردازشی","os.cpu_count()","—","تعداد پردازنده‌های منطقی را می‌دهد","int"],
["urandom()","تولید داده تصادفی امن","os.urandom(n)","n","تعداد مشخصی بایت تصادفی تولید می‌کند","bytes"]
],

"pathlib":[
["name","نام فایل/پوشه","Path(path).name","—","آخرین بخش مسیر را می‌دهد","str"],
["stem","نام بدون پسوند","Path(path).stem","—","نام فایل را بدون پسوند برمی‌گرداند","str"],
["suffix","پسوند فایل","Path(path).suffix","—","پسوند آخر فایل را می‌دهد","str"],
["suffixes","همه پسوندها","Path(path).suffixes","—","فهرست پسوندهای مسیر را می‌دهد","list"],
["parent","پوشه‌ی والد","Path(path).parent","—","پوشه‌ی بالاتر مسیر را می‌دهد","Path"],
["parents","والدهای مسیر","Path(path).parents","—","همه والدهای مسیر را در اختیار می‌گذارد","sequence"],
["is_file()","تشخیص فایل","Path(path).is_file()","—","بررسی می‌کند مسیر یک فایل معمولی است یا نه","True / False"],
["is_dir()","تشخیص پوشه","Path(path).is_dir()","—","بررسی می‌کند مسیر یک پوشه است یا نه","True / False"],
["iterdir()","پیمایش محتویات پوشه","Path(path).iterdir()","—","محتویات مستقیم پوشه را پیمایش می‌کند","iterator"],
["rglob()","جستجوی بازگشتی با الگو","Path(path).rglob(pattern)","pattern","فایل‌های مطابق الگو را در زیرپوشه‌ها پیدا می‌کند","iterator"],
["mkdir()","ساخت پوشه","Path(path).mkdir(parents=False, exist_ok=False)","parents, exist_ok","پوشه را می‌سازد","بدون خروجی"],
["unlink()","حذف فایل","Path(path).unlink()","—","فایل را حذف می‌کند","بدون خروجی"],
["rename()","تغییر نام مسیر","Path(path).rename(target)","target","نام یا مسیر را تغییر می‌دهد","Path"],
["read_bytes()","خواندن بایت‌ها","Path(path).read_bytes()","—","محتوای فایل را به صورت bytes می‌خواند","bytes"],
["write_bytes()","نوشتن بایت‌ها","Path(path).write_bytes(data)","data","داده باینری را ذخیره می‌کند","تعداد بایت"]
],

"shutil":[
["copy2()","کپی همراه metadata","shutil.copy2(src, dst)","src, dst","فایل را همراه metadata کپی می‌کند","مسیر مقصد"],
["copyfile()","کپی فقط محتوا","shutil.copyfile(src, dst)","src, dst","محتوای یک فایل را در فایل دیگر می‌نویسد","مسیر مقصد"],
["copymode()","کپی مجوزها","shutil.copymode(src, dst)","src, dst","permissionهای فایل را کپی می‌کند","بدون خروجی"],
["copystat()","کپی metadata","shutil.copystat(src, dst)","src, dst","اطلاعات stat را منتقل می‌کند","بدون خروجی"],
["ignore_patterns()","ساخت الگوی نادیده‌گیری","shutil.ignore_patterns(*patterns)","patterns","فایل‌های مطابق الگو را هنگام کپی نادیده می‌گیرد","callable"],
["make_archive()","ساخت آرشیو","shutil.make_archive(base_name, format, root_dir)","نام، فرمت، پوشه","از یک پوشه آرشیو می‌سازد","مسیر آرشیو"],
["unpack_archive()","استخراج آرشیو","shutil.unpack_archive(filename, extract_dir)","filename, extract_dir","آرشیو را استخراج می‌کند","بدون خروجی"],
["which()","پیدا کردن برنامه","shutil.which(cmd)","cmd","مسیر اجرایی یک فرمان را پیدا می‌کند","str / None"],
["get_terminal_size()","اندازه ترمینال","shutil.get_terminal_size()","options اختیاری","ابعاد ترمینال را می‌دهد","terminal size"],
["chown()","تغییر مالک فایل","shutil.chown(path, user=None, group=None)","path + options","مالک یا گروه فایل را تغییر می‌دهد","بدون خروجی"]
],

"concurrent.futures":[
["as_completed()","دریافت Futureهای تمام‌شده","as_completed(fs)","iterable of Future","Futureها را هنگام اتمام تحویل می‌دهد","iterator"],
["wait()","انتظار برای Futureها","wait(fs, timeout=None)","fs, timeout","برای پایان یا شرط مشخص صبر می‌کند","DoneAndNotDone"],
["Future","نماینده‌ی کار آینده","Future()","—","وضعیت یک کار غیرهم‌زمان را نگه می‌دارد","Future"],
["done()","بررسی پایان کار","future.done()","—","بررسی می‌کند Future تمام شده یا نه","True / False"],
["cancel()","لغو کار","future.cancel()","—","اگر هنوز شروع نشده باشد آن را لغو می‌کند","True / False"],
["cancelled()","بررسی لغو شدن","future.cancelled()","—","وضعیت لغو Future را می‌سنجد","True / False"],
["exception()","گرفتن خطای کار","future.exception()","timeout اختیاری","استثنای رخ‌داده را می‌دهد","Exception / None"],
["shutdown()","بستن Executor","executor.shutdown(wait=True)","wait","Executor را پس از کارها می‌بندد","بدون خروجی"],
["__enter__()","ورود به context manager","executor.__enter__()","—","برای استفاده با with آماده می‌شود","Executor"],
["__exit__()","خروج از context manager","executor.__exit__(...)","—","منابع Executor را آزاد می‌کند","بدون خروجی"]
],

"hashlib":[
["sha1()","ساخت SHA-1","hashlib.sha1(data)","bytes","یک digest از نوع SHA-1 می‌سازد","hash object"],
["sha384()","ساخت SHA-384","hashlib.sha384(data)","bytes","یک hash با طول 384 بیت می‌سازد","hash object"],
["sha512()","ساخت SHA-512","hashlib.sha512(data)","bytes","یک hash با طول 512 بیت می‌سازد","hash object"],
["blake2b()","ساخت BLAKE2b","hashlib.blake2b(data)","bytes","hash سریع BLAKE2b تولید می‌کند","hash object"],
["blake2s()","ساخت BLAKE2s","hashlib.blake2s(data)","bytes","نسخه کوچک‌تر BLAKE2 را می‌سازد","hash object"],
["update()","افزودن داده به hash","hash.update(data)","bytes","داده جدید را وارد محاسبه hash می‌کند","بدون خروجی"],
["digest()","گرفتن digest باینری","hash.digest()","—","نتیجه hash را به صورت bytes می‌دهد","bytes"],
["copy()","کپی hash object","hash.copy()","—","یک نسخه مستقل از وضعیت فعلی hash می‌سازد","hash object"],
["name","نام الگوریتم","hash.name","—","نام الگوریتم hash را می‌دهد","str"],
["digest_size","اندازه digest","hash.digest_size","—","تعداد بایت‌های digest را می‌دهد","int"],
["algorithms_available","الگوریتم‌های موجود","hashlib.algorithms_available","—","نام الگوریتم‌های قابل استفاده را می‌دهد","set"]
],

"openpyxl":[
["create_sheet()","ساخت Sheet جدید","workbook.create_sheet(title)","title اختیاری","یک برگه جدید ایجاد می‌کند","Worksheet"],
["remove()","حذف Sheet","workbook.remove(worksheet)","worksheet","یک برگه را حذف می‌کند","بدون خروجی"],
["sheetnames","نام Sheetها","workbook.sheetnames","—","نام تمام برگه‌ها را می‌دهد","list"],
["title","نام‌گذاری Sheet","sheet.title","title","نام برگه را می‌خواند یا تغییر می‌دهد","str"],
["max_row","تعداد ردیف‌ها","sheet.max_row","—","آخرین ردیف دارای داده را مشخص می‌کند","int"],
["max_column","تعداد ستون‌ها","sheet.max_column","—","آخرین ستون دارای داده را مشخص می‌کند","int"],
["iter_rows()","پیمایش ردیف‌ها","sheet.iter_rows(min_row=1, max_row=10)","range اختیاری","سلول‌ها را ردیف‌به‌ردیف پیمایش می‌کند","iterator"],
["iter_cols()","پیمایش ستون‌ها","sheet.iter_cols(min_col=1, max_col=5)","range اختیاری","سلول‌ها را ستون‌به‌ستون پیمایش می‌کند","iterator"],
["delete_rows()","حذف ردیف","sheet.delete_rows(idx, amount=1)","idx, amount","ردیف‌ها را حذف می‌کند","بدون خروجی"],
["insert_rows()","درج ردیف","sheet.insert_rows(idx, amount=1)","idx, amount","ردیف جدید اضافه می‌کند","بدون خروجی"],
["delete_cols()","حذف ستون","sheet.delete_cols(idx, amount=1)","idx, amount","ستون‌ها را حذف می‌کند","بدون خروجی"],
["insert_cols()","درج ستون","sheet.insert_cols(idx, amount=1)","idx, amount","ستون جدید اضافه می‌کند","بدون خروجی"],
["freeze_panes","ثابت کردن ردیف‌ها","sheet.freeze_panes = 'A2'","cell reference","بخش مشخصی از Sheet هنگام اسکرول ثابت می‌ماند","بدون خروجی"],
["merge_cells()","ادغام سلول‌ها","sheet.merge_cells(range_string)","range_string","چند سلول را ادغام می‌کند","بدون خروجی"],
["unmerge_cells()","لغو ادغام سلول‌ها","sheet.unmerge_cells(range_string)","range_string","ادغام یک محدوده را برمی‌دارد","بدون خروجی"],
["Font()","تنظیم فونت سلول","Font(name, size, bold=False)","options","ظاهر متن سلول را تنظیم می‌کند","Font"],
["PatternFill()","رنگ پس‌زمینه سلول","PatternFill(fill_type, fgColor)","options","پس‌زمینه سلول را تنظیم می‌کند","Fill"],
["Alignment()","تراز سلول","Alignment(horizontal, vertical)","options","تراز افقی و عمودی را تنظیم می‌کند","Alignment"]
],

"pandas":[
["tail()","نمایش چند ردیف آخر","df.tail(n=5)","n اختیاری","انتهای جدول را نمایش می‌دهد","DataFrame"],
["info()","خلاصه ساختار داده","df.info()","—","نوع ستون‌ها و تعداد مقادیر را گزارش می‌کند","None"],
["describe()","آمار توصیفی","df.describe()","options","آمار عددی ستون‌ها را می‌دهد","DataFrame"],
["shape","ابعاد جدول","df.shape","—","تعداد ردیف و ستون را می‌دهد","tuple"],
["columns","نام ستون‌ها","df.columns","—","برچسب ستون‌ها را برمی‌گرداند","Index"],
["index","شاخص ردیف‌ها","df.index","—","index جدول را می‌دهد","Index"],
["loc[]","انتخاب بر اساس برچسب","df.loc[row, column]","row, column","داده را با label انتخاب می‌کند","Series / DataFrame"],
["iloc[]","انتخاب بر اساس موقعیت","df.iloc[row, column]","row, column","داده را با شماره موقعیت انتخاب می‌کند","Series / DataFrame"],
["query()","فیلتر با شرط","df.query(expr)","expr","ردیف‌های مطابق شرط را انتخاب می‌کند","DataFrame"],
["groupby()","گروه‌بندی داده‌ها","df.groupby(by)","by","داده‌ها را بر اساس یک یا چند ستون گروه‌بندی می‌کند","GroupBy"],
["value_counts()","شمارش مقادیر","df['column'].value_counts()","column","تعداد تکرار هر مقدار را می‌شمارد","Series"],
["dropna()","حذف مقادیر خالی","df.dropna()","options","ردیف/ستون‌های دارای NaN را حذف می‌کند","DataFrame"],
["fillna()","جایگزینی مقادیر خالی","df.fillna(value)","value","مقادیر خالی را با مقدار مشخص پر می‌کند","DataFrame"],
["isna()","تشخیص مقدار خالی","df.isna()","—","خانه‌های خالی را مشخص می‌کند","DataFrame"],
["duplicated()","تشخیص رکورد تکراری","df.duplicated()","options","ردیف‌های تکراری را مشخص می‌کند","Series"],
["drop_duplicates()","حذف رکوردهای تکراری","df.drop_duplicates()","options","رکوردهای تکراری را حذف می‌کند","DataFrame"],
["rename()","تغییر نام ستون‌ها","df.rename(columns=mapping)","mapping","برچسب ستون‌ها یا index را تغییر می‌دهد","DataFrame"],
["merge()","ترکیب دو جدول","pd.merge(left, right, on='id')","دو DataFrame + key","دو جدول را بر اساس کلید ترکیب می‌کند","DataFrame"],
["concat()","چسباندن جدول‌ها","pd.concat(objs)","لیست DataFrameها","چند جدول را به هم متصل می‌کند","DataFrame"],
["to_json()","ذخیره به JSON","df.to_json(path)","path + options","DataFrame را به JSON تبدیل می‌کند","JSON file"]
],

"watchdog":[
["on_created()","واکنش به ایجاد فایل","handler.on_created(event)","event","هنگام ایجاد فایل/پوشه اجرا می‌شود","event"],
["on_modified()","واکنش به تغییر فایل","handler.on_modified(event)","event","هنگام تغییر فایل اجرا می‌شود","event"],
["on_deleted()","واکنش به حذف","handler.on_deleted(event)","event","هنگام حذف فایل اجرا می‌شود","event"],
["on_moved()","واکنش به جابه‌جایی","handler.on_moved(event)","event","هنگام تغییر مسیر فایل اجرا می‌شود","event"],
["is_directory","تشخیص رویداد پوشه","event.is_directory","—","مشخص می‌کند رویداد مربوط به پوشه است یا فایل","bool"],
["src_path","مسیر منبع رویداد","event.src_path","—","مسیر آیتم تغییرکرده را می‌دهد","str"],
["dest_path","مسیر مقصد رویداد","event.dest_path","—","در رویداد move مسیر مقصد را می‌دهد","str"],
["schedule()","اتصال handler به مسیر","observer.schedule(handler, path, recursive=True)","handler, path, recursive","نظارت را روی مسیر تنظیم می‌کند","بدون خروجی"],
["start()","شروع thread ناظر","observer.start()","—","نظارت را آغاز می‌کند","thread"],
["stop()","درخواست توقف","observer.stop()","—","نظارت را متوقف می‌کند","بدون خروجی"],
["join()","صبر تا پایان","observer.join(timeout=None)","timeout اختیاری","تا پایان thread منتظر می‌ماند","بدون خروجی"],
["is_alive()","بررسی فعال بودن ناظر","observer.is_alive()","—","فعال بودن thread را بررسی می‌کند","bool"]
],

"schedule":[
["weeks","واحد هفته","schedule.every(1).weeks","—","زمان‌بندی هفتگی ایجاد می‌کند","Job"],
["monday","روز دوشنبه","schedule.every().monday","—","اجرای job در دوشنبه","Job"],
["tuesday","روز سه‌شنبه","schedule.every().tuesday","—","اجرای job در سه‌شنبه","Job"],
["wednesday","روز چهارشنبه","schedule.every().wednesday","—","اجرای job در چهارشنبه","Job"],
["thursday","روز پنج‌شنبه","schedule.every().thursday","—","اجرای job در پنج‌شنبه","Job"],
["friday","روز جمعه","schedule.every().friday","—","اجرای job در جمعه","Job"],
["saturday","روز شنبه","schedule.every().saturday","—","اجرای job در شنبه","Job"],
["at()","تعیین ساعت اجرا","job.at('10:30')","زمان","زمان دقیق اجرای job را تعیین می‌کند","Job"],
["until()","تعیین زمان پایان","job.until('18:00')","زمان/تاریخ","زمان‌بندی را تا زمان مشخص ادامه می‌دهد","Job"],
["cancel_job()","لغو یک job","schedule.cancel_job(job)","job","job مشخص را لغو می‌کند","بدون خروجی"],
["clear()","پاک کردن jobها","schedule.clear(tag=None)","tag اختیاری","jobهای زمان‌بندی‌شده را پاک می‌کند","بدون خروجی"],
["get_jobs()","دریافت jobها","schedule.get_jobs(tag=None)","tag اختیاری","فهرست jobهای ثبت‌شده را می‌دهد","list"],
["run_all()","اجرای همه jobها","schedule.run_all(delay_seconds=0)","delay اختیاری","تمام jobها را اجرا می‌کند","بدون خروجی"]
],

"send2trash":[
["send2trash()","انتقال فایل به سطل زباله","send2trash(path)","path","فایل یا پوشه را بدون حذف دائمی به Trash می‌فرستد","بدون خروجی"]
],

"fnmatch":[
["fnmatchcase()","تطبیق حساس به حروف","fnmatchcase(name, pattern)","name, pattern","مطابقت را بدون نادیده‌گرفتن case انجام می‌دهد","bool"],
["translate()","تبدیل الگو به regex","translate(pattern)","pattern","الگوی shell را به عبارت منظم تبدیل می‌کند","str"],
["filter()","فیلتر نام‌ها","filter(names, pattern)","names, pattern","نام‌های مطابق الگو را جدا می‌کند","list"]
],

"filecmp":[
["clear_cache()","پاک کردن cache مقایسه","filecmp.clear_cache()","—","cache نتایج مقایسه را پاک می‌کند","بدون خروجی"],
["dircmp.left","مسیر پوشه اول","comparison.left","—","مسیر طرف اول مقایسه را می‌دهد","str"],
["dircmp.right","مسیر پوشه دوم","comparison.right","—","مسیر طرف دوم مقایسه را می‌دهد","str"],
["dircmp.common","موارد مشترک","comparison.common","—","نام‌های مشترک دو پوشه را می‌دهد","list"],
["dircmp.left_only","فقط در پوشه اول","comparison.left_only","—","مواردی که فقط در سمت چپ هستند","list"],
["dircmp.right_only","فقط در پوشه دوم","comparison.right_only","—","مواردی که فقط در سمت راست هستند","list"],
["dircmp.same_files","فایل‌های یکسان","comparison.same_files","—","فایل‌های مشترک و یکسان را می‌دهد","list"],
["dircmp.diff_files","فایل‌های متفاوت","comparison.diff_files","—","فایل‌های مشترک اما متفاوت را می‌دهد","list"]
],

"tempfile":[
["TemporaryFile()","ساخت فایل موقت","tempfile.TemporaryFile(mode='w+')","mode + options","فایل موقت را باز می‌کند","file object"],
["NamedTemporaryFile()","ساخت فایل موقت نام‌دار","tempfile.NamedTemporaryFile(suffix=None)","suffix + options","فایل موقتی با نام قابل مشاهده می‌سازد","file object"],
["SpooledTemporaryFile()","فایل موقت با buffer","tempfile.SpooledTemporaryFile(max_size=...)","max_size + options","تا حد مشخصی داده را در حافظه نگه می‌دارد","file object"],
["TemporaryDirectory()","ساخت پوشه موقت","tempfile.TemporaryDirectory()","options","پوشه موقت می‌سازد و مدیریت پاک‌سازی دارد","directory path"],
["mkstemp()","ساخت فایل موقت سطح پایین","tempfile.mkstemp(suffix=None)","options","descriptor و مسیر فایل موقت می‌سازد","fd, path"],
["mkdtemp()","ساخت پوشه موقت سطح پایین","tempfile.mkdtemp(suffix=None)","options","یک پوشه موقت ایجاد می‌کند","path"],
["gettempdir()","پوشه موقت سیستم","tempfile.gettempdir()","—","مسیر پیش‌فرض temp را می‌دهد","str"],
["gettempprefix()","پیشوند فایل موقت","tempfile.gettempprefix()","—","پیشوند نام فایل‌های موقت را می‌دهد","str"]
],

"stat":[
["S_ISLNK()","تشخیص symbolic link","stat.S_ISLNK(mode)","mode","بررسی می‌کند مسیر لینک نمادین است یا نه","bool"],
["S_ISSOCK()","تشخیص socket","stat.S_ISSOCK(mode)","mode","نوع socket را بررسی می‌کند","bool"],
["S_ISCHR()","تشخیص character device","stat.S_ISCHR(mode)","mode","نوع character device را بررسی می‌کند","bool"],
["S_ISBLK()","تشخیص block device","stat.S_ISBLK(mode)","mode","نوع block device را بررسی می‌کند","bool"],
["S_ISFIFO()","تشخیص FIFO","stat.S_ISFIFO(mode)","mode","نوع named pipe را بررسی می‌کند","bool"],
["ST_SIZE","اندازه فایل","stat.ST_SIZE","stat_result","اندازه فایل را از metadata می‌گیرد","int"],
["ST_MTIME","زمان آخرین تغییر","stat.ST_MTIME","stat_result","زمان تغییر فایل را به timestamp می‌دهد","float"],
["ST_CTIME","زمان ایجاد/metadata","stat.ST_CTIME","stat_result","زمان وابسته به سیستم‌عامل را می‌دهد","float"],
["ST_MODE","mode فایل","stat.ST_MODE","stat_result","اطلاعات نوع و مجوزهای فایل را نگه می‌دارد","int"],
["filemode()","تبدیل mode به متن","stat.filemode(mode)","mode","مجوزها را شبیه ls -l نمایش می‌دهد","str"]
],

"io":[
["seek()","جابجایی مکان جریان","stream.seek(offset)","offset + whence","مکان خواندن/نوشتن را تغییر می‌دهد","position"],
["tell()","گرفتن مکان فعلی","stream.tell()","—","مکان فعلی جریان را می‌دهد","int"],
["readline()","خواندن یک خط","stream.readline()","size اختیاری","یک خط را می‌خواند","str / bytes"],
["readlines()","خواندن همه خطوط","stream.readlines()","hint اختیاری","خطوط را به صورت لیست می‌خواند","list"],
["writelines()","نوشتن چند خط","stream.writelines(lines)","lines","چند رشته را پشت سر هم می‌نویسد","بدون خروجی"],
["truncate()","کوتاه کردن جریان","stream.truncate(size=None)","size اختیاری","محتوای جریان را از اندازه مشخص کوتاه می‌کند","size"],
["flush()","ارسال داده به جریان","stream.flush()","—","buffer را تخلیه می‌کند","بدون خروجی"],
["getvalue()","گرفتن محتوای StringIO","stream.getvalue()","—","کل محتوای RAM stream را می‌دهد","str / bytes"],
["seekable()","بررسی قابل seek بودن","stream.seekable()","—","قابلیت تغییر مکان را بررسی می‌کند","bool"],
["readable()","بررسی قابل خواندن بودن","stream.readable()","—","قابلیت خواندن را بررسی می‌کند","bool"],
["writable()","بررسی قابل نوشتن بودن","stream.writable()","—","قابلیت نوشتن را بررسی می‌کند","bool"]
],

"mimetypes":[
["init()","راه‌اندازی MIME database","mimetypes.init(files=None)","files اختیاری","پایگاه MIME را مقداردهی می‌کند","بدون خروجی"],
["add_type()","افزودن MIME type","mimetypes.add_type(type, ext)","type, ext","یک ارتباط MIME و پسوند اضافه می‌کند","بدون خروجی"],
["guess_all_extensions()","حدس همه پسوندها","mimetypes.guess_all_extensions(type)","type","همه پسوندهای شناخته‌شده برای MIME را می‌دهد","list"],
["types_map","نقشه نوع فایل","mimetypes.types_map","—","mapping پسوند به MIME را نشان می‌دهد","dict"],
["common_types","نوع‌های رایج","mimetypes.common_types","—","نوع‌های MIME رایج را نگه می‌دارد","dict"],
["inited","وضعیت initialization","mimetypes.inited","—","وضعیت مقداردهی database را نشان می‌دهد","bool"]
],

"tarfile":[
["gettarinfo()","ساخت اطلاعات TarInfo","tarfile.gettarinfo(name, arcname=None)","name + options","metadata یک فایل را برای tar می‌سازد","TarInfo"],
["getmembers()","گرفتن اعضای آرشیو","tar.getmembers()","—","لیست اعضای tar را می‌دهد","list"],
["getnames()","نام اعضای آرشیو","tar.getnames()","—","نام فایل‌های داخل tar را می‌دهد","list"],
["getmember()","گرفتن یک عضو","tar.getmember(name)","name","TarInfo مربوط به نام را می‌دهد","TarInfo"],
["extract()","استخراج یک عضو","tar.extract(member, path='.')","member, path","یک فایل/عضو را استخراج می‌کند","بدون خروجی"],
["extractfile()","خواندن عضو به شکل file","tar.extractfile(member)","member","محتوای یک عضو را به شکل stream می‌دهد","file object"],
["close()","بستن آرشیو","tar.close()","—","آرشیو را می‌بندد","بدون خروجی"],
["is_tarfile()","تشخیص tar بودن فایل","tarfile.is_tarfile(name)","name","بررسی می‌کند فایل یک tar معتبر است یا نه","bool"],
["TarInfo","ساخت اطلاعات عضو","tarfile.TarInfo(name)","name","اطلاعات یک عضو آرشیو را مدل می‌کند","TarInfo"]
],

"gzip / bz2 / lzma":[
["gzip.compress()","فشرده‌سازی gzip در حافظه","gzip.compress(data)","bytes","داده را به gzip تبدیل می‌کند","bytes"],
["gzip.decompress()","بازکردن gzip","gzip.decompress(data)","bytes","داده gzip را باز می‌کند","bytes"],
["bz2.compress()","فشرده‌سازی BZ2","bz2.compress(data)","bytes","داده را با BZ2 فشرده می‌کند","bytes"],
["bz2.decompress()","بازکردن BZ2","bz2.decompress(data)","bytes","داده BZ2 را باز می‌کند","bytes"],
["lzma.compress()","فشرده‌سازی LZMA","lzma.compress(data)","bytes","داده را با LZMA فشرده می‌کند","bytes"],
["lzma.decompress()","بازکردن LZMA","lzma.decompress(data)","bytes","داده LZMA را باز می‌کند","bytes"],
["GzipFile()","فایل gzip سطح پایین","gzip.GzipFile(filename, mode)","filename, mode","جریان gzip ایجاد می‌کند","file object"],
["BZ2File()","فایل BZ2 سطح پایین","bz2.BZ2File(filename, mode)","filename, mode","جریان BZ2 ایجاد می‌کند","file object"],
["LZMAFile()","فایل LZMA سطح پایین","lzma.LZMAFile(filename, mode)","filename, mode","جریان LZMA ایجاد می‌کند","file object"]
],

"requests":[
["put()","ارسال PUT","requests.put(url, data=None, json=None)","url + data/json","درخواست PUT ارسال می‌کند","Response"],
["patch()","ارسال PATCH","requests.patch(url, data=None, json=None)","url + data/json","بخشی از یک منبع را به‌روزرسانی می‌کند","Response"],
["delete()","ارسال DELETE","requests.delete(url)","url + options","درخواست حذف HTTP می‌فرستد","Response"],
["head()","ارسال HEAD","requests.head(url)","url + options","فقط headerهای پاسخ را درخواست می‌کند","Response"],
["options()","ارسال OPTIONS","requests.options(url)","url + options","قابلیت‌های HTTP endpoint را می‌پرسد","Response"],
["Session()","ساخت session","requests.Session()","—","اتصالات و cookieها را بین درخواست‌ها حفظ می‌کند","Session"],
["headers","خواندن headerها","response.headers","—","headerهای پاسخ را می‌خواند","CaseInsensitiveDict"],
["text","متن پاسخ","response.text","—","بدنه پاسخ را به صورت متن می‌دهد","str"],
["content","محتوای باینری","response.content","—","بدنه پاسخ را به شکل bytes می‌دهد","bytes"],
["raise_for_status()","بررسی خطای HTTP","response.raise_for_status()","—","برای statusهای خطادار exception ایجاد می‌کند","None / Exception"],
["timeout","محدودیت زمان","requests.get(url, timeout=5)","seconds","مدت انتظار برای پاسخ را محدود می‌کند","Response / Timeout"],
["params","پارامترهای URL","requests.get(url, params={'q':'python'})","mapping","پارامتر query string اضافه می‌کند","Response"],
["auth","احراز هویت","requests.get(url, auth=(user, password))","credentials","اطلاعات authentication را می‌فرستد","Response"]
],

"argparse":[
["add_subparsers()","ساخت زیرفرمان‌ها","parser.add_subparsers(dest='command')","options","برای ابزارهای چندفرمانی زیرparser می‌سازد","SubParsers"],
["set_defaults()","تنظیم مقدار پیش‌فرض","parser.set_defaults(func=handler)","key/value","مقادیر پیش‌فرض namespace را تعیین می‌کند","بدون خروجی"],
["add_mutually_exclusive_group()","گروه گزینه‌های انحصاری","parser.add_mutually_exclusive_group()","—","گزینه‌هایی می‌سازد که هم‌زمان قابل استفاده نیستند","Group"],
["type","تبدیل نوع ورودی","parser.add_argument('--age', type=int)","callable","متن ورودی را به نوع مورد نظر تبدیل می‌کند","typed value"],
["default","مقدار پیش‌فرض","parser.add_argument('--name', default='Hasti')","value","برای نبودن آرگومان مقدار پیش‌فرض می‌دهد","value"],
["choices","محدود کردن گزینه‌ها","parser.add_argument('--mode', choices=['a','b'])","list","فقط گزینه‌های تعیین‌شده را قبول می‌کند","value"],
["required","اجباری کردن گزینه","parser.add_argument('--file', required=True)","bool","وجود آرگومان را الزامی می‌کند","value"],
["help","متن راهنما","parser.add_argument('--file', help='...')","text","راهنمای گزینه را برای کاربر نمایش می‌دهد","help text"]
],

"xml.etree.ElementTree":[
["SubElement()","ساخت فرزند XML","ET.SubElement(parent, tag)","parent, tag","یک عنصر فرزند به XML اضافه می‌کند","Element"],
["tostring()","تبدیل XML به bytes","ET.tostring(element, encoding='unicode')","element + options","درخت XML را به متن/bytes تبدیل می‌کند","str / bytes"],
["ElementTree()","ساخت درخت XML","ET.ElementTree(element)","element","یک ElementTree ایجاد می‌کند","ElementTree"],
["write()","ذخیره XML","tree.write(file, encoding='utf-8')","file + options","درخت XML را در فایل ذخیره می‌کند","بدون خروجی"],
["findall()","پیدا کردن همه عناصر","root.findall(match)","match","تمام عناصر مطابق را پیدا می‌کند","list"],
["iter()","پیمایش عناصر","root.iter(tag=None)","tag اختیاری","تمام عناصر درخت را پیمایش می‌کند","iterator"],
["get()","گرفتن attribute","element.get(key)","key","مقدار یک ویژگی XML را می‌خواند","str / None"],
["set()","تنظیم attribute","element.set(key, value)","key, value","ویژگی یک عنصر را تنظیم می‌کند","بدون خروجی"],
["append()","افزودن فرزند","element.append(child)","child","یک عنصر را به فرزندان اضافه می‌کند","بدون خروجی"],
["remove()","حذف فرزند","element.remove(subelement)","subelement","یک فرزند را حذف می‌کند","بدون خروجی"],
["text","متن عنصر","element.text","—","متن داخل عنصر را می‌خواند/تنظیم می‌کند","str / None"]
],

"configparser":[
["sections()","فهرست sectionها","config.sections()","—","نام بخش‌های فایل INI را می‌دهد","list"],
["has_section()","بررسی section","config.has_section(section)","section","وجود بخش را بررسی می‌کند","bool"],
["has_option()","بررسی option","config.has_option(section, option)","section, option","وجود یک گزینه را بررسی می‌کند","bool"],
["items()","گرفتن گزینه‌ها","config.items(section)","section","تمام گزینه‌های یک بخش را می‌دهد","list"],
["remove_option()","حذف option","config.remove_option(section, option)","section, option","یک گزینه را حذف می‌کند","bool"],
["remove_section()","حذف section","config.remove_section(section)","section","یک بخش را حذف می‌کند","bool"],
["add_section()","افزودن section","config.add_section(section)","section","بخش جدیدی می‌سازد","بدون خروجی"],
["write()","ذخیره تنظیمات","config.write(file_object)","file object","تنظیمات را در فایل می‌نویسد","بدون خروجی"],
["getint()","خواندن عدد صحیح","config.getint(section, option)","section, option","مقدار option را به int تبدیل می‌کند","int"],
["getfloat()","خواندن عدد اعشاری","config.getfloat(section, option)","section, option","مقدار را به float تبدیل می‌کند","float"],
["getboolean()","خواندن مقدار منطقی","config.getboolean(section, option)","section, option","مقدار را به bool تبدیل می‌کند","bool"]
],

"time":[
["monotonic()","زمان یکنواخت","time.monotonic()","—","ساعتی مناسب برای اندازه‌گیری فاصله زمانی می‌دهد","float"],
["process_time()","زمان CPU پردازش","time.process_time()","—","زمان مصرف CPU فرایند را می‌سنجد","float"],
["thread_time()","زمان CPU thread","time.thread_time()","—","زمان CPU thread فعلی را می‌سنجد","float"],
["ctime()","تبدیل timestamp به متن","time.ctime(seconds=None)","seconds اختیاری","timestamp را به رشته زمانی تبدیل می‌کند","str"],
["localtime()","زمان محلی","time.localtime(seconds=None)","seconds اختیاری","timestamp را به ساختار زمان محلی تبدیل می‌کند","struct_time"],
["gmtime()","زمان UTC","time.gmtime(seconds=None)","seconds اختیاری","timestamp را به UTC تبدیل می‌کند","struct_time"],
["strftime()","قالب‌بندی زمان","time.strftime(format, t)","format, time","زمان را با قالب دلخواه نمایش می‌دهد","str"],
["strptime()","تبدیل متن به زمان","time.strptime(string, format)","string, format","رشته زمان را parse می‌کند","struct_time"],
["sleep()","توقف اجرای برنامه","time.sleep(seconds)","seconds","برای مدت مشخص مکث می‌کند","بدون خروجی"],
["tzset()","اعمال timezone محیط","time.tzset()","—","تنظیمات timezone محیط را اعمال می‌کند","بدون خروجی"]
],

"sys / platform":[
["sys.executable","مسیر Python اجراکننده","sys.executable","—","مسیر مفسر Python فعلی را می‌دهد","str"],
["sys.path","مسیرهای import","sys.path","—","مسیرهای جستجوی moduleها را نشان می‌دهد","list"],
["sys.platform","شناسه سیستم‌عامل","sys.platform","—","شناسه platform فعلی را می‌دهد","str"],
["sys.exit()","خروج از برنامه","sys.exit(code=0)","code اختیاری","اجرای برنامه را با کد خروج پایان می‌دهد","SystemExit"],
["platform.node()","نام دستگاه","platform.node()","—","نام شبکه‌ای دستگاه را می‌دهد","str"],
["platform.machine()","نوع ماشین","platform.machine()","—","معماری ماشین را گزارش می‌کند","str"],
["platform.processor()","نام پردازنده","platform.processor()","—","اطلاعات پردازنده را گزارش می‌کند","str"],
["platform.platform()","خلاصه سیستم","platform.platform()","—","اطلاعات ترکیبی سیستم‌عامل را می‌دهد","str"],
["platform.architecture()","معماری Python","platform.architecture()","—","bitness و executable را گزارش می‌کند","tuple"],
["platform.release()","نسخه سیستم‌عامل","platform.release()","—","release سیستم‌عامل را می‌دهد","str"],
["platform.uname()","اطلاعات کامل سیستم","platform.uname()","—","اطلاعات سیستم را در یک ساختار می‌دهد","tuple-like"]
],

"threading / multiprocessing":[
["current_thread()","thread فعلی","threading.current_thread()","—","thread در حال اجرا را می‌دهد","Thread"],
["active_count()","تعداد threadهای فعال","threading.active_count()","—","تعداد threadهای فعال را می‌شمارد","int"],
["Lock()","ساخت قفل thread","threading.Lock()","—","از دسترسی هم‌زمان به بخش مشترک جلوگیری می‌کند","Lock"],
["Event()","ساخت event","threading.Event()","—","برای هماهنگ‌سازی threadها استفاده می‌شود","Event"],
["Semaphore()","ساخت semaphore","threading.Semaphore(value)","value","تعداد دسترسی هم‌زمان را محدود می‌کند","Semaphore"],
["Queue()","صف امن برای thread","queue.Queue(maxsize=0)","maxsize اختیاری","داده را بین threadها منتقل می‌کند","Queue"],
["Pool()","ساخت process pool","multiprocessing.Pool(processes)","processes اختیاری","چند process را برای کارهای مشابه مدیریت می‌کند","Pool"],
["apply_async()","اجرای غیرهم‌زمان در Pool","pool.apply_async(func, args)","func, args","کار را به process pool می‌فرستد","AsyncResult"],
["map()","اجرای map در Pool","pool.map(func, iterable)","func, iterable","تابع را روی چند داده اجرا می‌کند","list"],
["is_alive()","بررسی زنده بودن","thread.is_alive()","—","وضعیت thread/process را بررسی می‌کند","bool"],
["daemon","thread daemon","thread.daemon","—","تعیین می‌کند thread daemon باشد یا نه","bool"]
],

"sqlite3":[
["execute()","اجرای SQL","cursor.execute(sql, parameters)","SQL + parameters","دستور SQL را اجرا می‌کند","Cursor"],
["executemany()","اجرای SQL برای چند ردیف","cursor.executemany(sql, seq_of_parameters)","SQL + data","یک دستور را روی چند مجموعه داده اجرا می‌کند","Cursor"],
["executescript()","اجرای چند دستور SQL","cursor.executescript(script)","script","چند دستور SQL را پشت سر هم اجرا می‌کند","Cursor"],
["fetchone()","گرفتن یک ردیف","cursor.fetchone()","—","یک ردیف از نتیجه را می‌دهد","tuple / None"],
["fetchmany()","گرفتن چند ردیف","cursor.fetchmany(size)","size","تعداد مشخصی ردیف می‌گیرد","list"],
["commit()","ثبت تغییرات","connection.commit()","—","تغییرات تراکنش را ذخیره می‌کند","بدون خروجی"],
["rollback()","برگرداندن تراکنش","connection.rollback()","—","تغییرات ثبت‌نشده را لغو می‌کند","بدون خروجی"],
["close()","بستن اتصال","connection.close()","—","اتصال دیتابیس را می‌بندد","بدون خروجی"],
["rowcount","تعداد ردیف تغییرکرده","cursor.rowcount","—","تعداد ردیف‌های متاثر از عملیات را نشان می‌دهد","int"],
["lastrowid","شناسه آخرین رکورد","cursor.lastrowid","—","آخرین id تولیدشده را می‌دهد","int"]
],

"PDF tools":[
["pages","دسترسی به صفحات","reader.pages","—","صفحات PDF را در اختیار می‌گذارد","list-like"],
["extract_text()","استخراج متن PDF","page.extract_text()","—","متن یک صفحه را استخراج می‌کند","str"],
["merge_page()","ادغام دو صفحه","page.merge_page(other)","page","محتوای دو صفحه را روی هم قرار می‌دهد","Page"],
["add_page()","افزودن صفحه","writer.add_page(page)","page","یک صفحه را به خروجی اضافه می‌کند","بدون خروجی"],
["write()","نوشتن PDF","writer.write(stream)","stream","PDF ساخته‌شده را ذخیره می‌کند","بدون خروجی"],
["insert_pdf()","ادغام PDFها با PyMuPDF","doc.insert_pdf(other)","other document","صفحات یک PDF را وارد دیگری می‌کند","بدون خروجی"],
["page_count","تعداد صفحات","doc.page_count","—","تعداد صفحات سند را می‌دهد","int"],
["load_page()","باز کردن صفحه","doc.load_page(index)","index","یک صفحه را برای پردازش باز می‌کند","Page"],
["get_text()","استخراج متن صفحه","page.get_text()","options اختیاری","متن صفحه را استخراج می‌کند","str"],
["get_pixmap()","رندر صفحه به تصویر","page.get_pixmap()","options","صفحه را به تصویر تبدیل می‌کند","Pixmap"],
["save()","ذخیره PDF با PyMuPDF","doc.save(path)","path","سند PDF را ذخیره می‌کند","بدون خروجی"]
],

"python-docx":[
["add_heading()","افزودن عنوان","document.add_heading(text, level)","text, level","عنوان با سطح مشخص ایجاد می‌کند","Paragraph"],
["add_picture()","افزودن تصویر","document.add_picture(image_path)","image_path + options","تصویر را وارد Word می‌کند","InlineShape"],
["add_page_break()","افزودن شکست صفحه","document.add_page_break()","—","صفحه جدید ایجاد می‌کند","Paragraph"],
["paragraphs","دسترسی به پاراگراف‌ها","document.paragraphs","—","فهرست پاراگراف‌های سند را می‌دهد","list"],
["tables","دسترسی به جدول‌ها","document.tables","—","جدول‌های سند را می‌دهد","list"],
["add_run()","افزودن متن به پاراگراف","paragraph.add_run(text)","text","یک run متنی به پاراگراف اضافه می‌کند","Run"],
["bold","ضخیم کردن متن","run.bold = True","bool","متن run را Bold می‌کند","bool"],
["italic","کج کردن متن","run.italic = True","bool","متن run را Italic می‌کند","bool"],
["style","تغییر style پاراگراف","paragraph.style = 'Heading 1'","style","سبک پاراگراف را تغییر می‌دهد","Style"],
["cell.text","متن سلول جدول","cell.text = value","value","محتوای یک سلول جدول را تنظیم می‌کند","str"],
["rows","ردیف‌های جدول","table.rows","—","ردیف‌های جدول را در اختیار می‌گذارد","list-like"],
["columns","ستون‌های جدول","table.columns","—","ستون‌های جدول را در اختیار می‌گذارد","list-like"],
["section","بخش‌های سند","document.sections","—","بخش‌های سند و تنظیمات صفحه را می‌دهد","Sections"],
["orientation","جهت صفحه","section.orientation = WD_ORIENT.LANDSCAPE","value","جهت صفحه را تغییر می‌دهد","orientation"],
["add_table()","افزودن جدول","document.add_table(rows, cols)","rows, cols","جدول جدید می‌سازد","Table"]
],

"python-pptx":[
["slide_layouts","دسترسی به layoutها","prs.slide_layouts","—","قالب‌های آماده اسلاید را می‌دهد","list-like"],
["shapes","دسترسی به اشکال","slide.shapes","—","اشکال و کادرهای اسلاید را می‌دهد","ShapeTree"],
["add_picture()","افزودن تصویر","slide.shapes.add_picture(image_path, left, top)","image + position","تصویر را روی اسلاید قرار می‌دهد","Picture"],
["add_table()","افزودن جدول","slide.shapes.add_table(rows, cols, left, top, width, height)","rows, cols + geometry","جدول به اسلاید اضافه می‌کند","GraphicFrame"],
["text_frame","دسترسی به کادر متن","shape.text_frame","—","متن داخل یک shape را مدیریت می‌کند","TextFrame"],
["text","تنظیم متن shape","shape.text = text","text","متن shape را تنظیم می‌کند","str"],
["paragraphs","پاراگراف‌های متن","shape.text_frame.paragraphs","—","پاراگراف‌های text frame را می‌دهد","list"],
["font.size","اندازه فونت","run.font.size = Pt(24)","size","اندازه متن را تنظیم می‌کند","Length"],
["font.bold","Bold کردن متن","run.font.bold = True","bool","متن را ضخیم می‌کند","bool"],
["fill.solid()","پس‌زمینه شکل","shape.fill.solid()","—","نوع پرکردن شکل را solid می‌کند","FillFormat"],
["slide_width","عرض اسلاید","prs.slide_width","—","عرض اسلاید را می‌دهد/تنظیم می‌کند","Length"],
["slide_height","ارتفاع اسلاید","prs.slide_height","—","ارتفاع اسلاید را می‌دهد/تنظیم می‌کند","Length"]
],

"watchfiles":[
["watch()","نظارت روی مسیر","watch(path)","path","تغییرات مسیر را دنبال می‌کند","generator"],
["Change.added","رویداد ایجاد","Change.added","—","نشان‌دهنده ایجاد فایل/پوشه است","enum"],
["Change.modified","رویداد تغییر","Change.modified","—","نشان‌دهنده تغییر فایل/پوشه است","enum"],
["Change.deleted","رویداد حذف","Change.deleted","—","نشان‌دهنده حذف فایل/پوشه است","enum"],
["awatch()","نظارت async","awatch(path)","path + options","نسخه async برای watch است","async generator"],
["debounce","کاهش رویدادهای تکراری","watch(path, debounce=1600)","milliseconds","رویدادهای پشت‌سرهم را ادغام می‌کند","changes"],
["step","حداکثر تعداد تغییرات","watch(path, step=50)","count","تعداد تغییرات هر batch را کنترل می‌کند","changes"],
["stop_event","توقف نظارت","watch(path, stop_event=event)","event","با event می‌توان watch را متوقف کرد","watcher"]
],

"APScheduler":[
["DateTrigger","اجرای یک‌باره در تاریخ مشخص","DateTrigger(run_date)","run_date","trigger اجرای یک‌باره می‌سازد","Trigger"],
["IntervalTrigger","اجرای دوره‌ای","IntervalTrigger(hours=1)","interval options","trigger تکرارشونده می‌سازد","Trigger"],
["CronTrigger","اجرای زمان‌بندی‌شده با cron","CronTrigger(hour=10)","cron fields","زمان‌بندی دقیق بر اساس تقویم می‌سازد","Trigger"],
["pause()","مکث job","scheduler.pause_job(job_id)","job_id","اجرای job را موقتاً متوقف می‌کند","Job"],
["resume()","ادامه job","scheduler.resume_job(job_id)","job_id","job متوقف‌شده را فعال می‌کند","Job"],
["remove_job()","حذف job","scheduler.remove_job(job_id)","job_id","یک job را حذف می‌کند","بدون خروجی"],
["get_jobs()","گرفتن jobها","scheduler.get_jobs()","—","jobهای زمان‌بندی‌شده را می‌دهد","list"],
["modify_job()","تغییر job","scheduler.modify_job(job_id, name=...)","job_id + options","ویژگی‌های job را تغییر می‌دهد","Job"],
["reschedule_job()","تغییر زمان‌بندی","scheduler.reschedule_job(job_id, trigger)","job_id, trigger","trigger یک job را عوض می‌کند","Job"],
["running","وضعیت scheduler","scheduler.running","—","فعال بودن scheduler را نشان می‌دهد","bool"]
],

"httpx":[
["post()","POST همگام","httpx.post(url, json=data)","url + data","درخواست POST می‌فرستد","Response"],
["put()","PUT همگام","httpx.put(url, json=data)","url + data","درخواست PUT می‌فرستد","Response"],
["patch()","PATCH همگام","httpx.patch(url, json=data)","url + data","درخواست PATCH می‌فرستد","Response"],
["delete()","DELETE همگام","httpx.delete(url)","url","درخواست DELETE می‌فرستد","Response"],
["request()","درخواست عمومی HTTP","client.request(method, url)","method, url + options","هر نوع HTTP request را ارسال می‌کند","Response"],
["get()","GET با Client","client.get(url)","url + options","GET را با client اجرا می‌کند","Response"],
["post()","POST با Client","client.post(url, json=data)","url + data","POST را با client اجرا می‌کند","Response"],
["status_code","کد وضعیت","response.status_code","—","کد HTTP پاسخ را می‌دهد","int"],
["headers","headerهای پاسخ","response.headers","—","headerهای پاسخ را می‌دهد","Headers"],
["text","متن پاسخ","response.text","—","متن پاسخ را می‌دهد","str"],
["json()","خواندن JSON","response.json()","—","JSON پاسخ را parse می‌کند","dict/list"],
["raise_for_status()","بررسی خطا","response.raise_for_status()","—","برای status خطادار exception می‌دهد","None / Exception"],
["stream()","دریافت streaming","client.stream(method, url)","method, url","پاسخ را به صورت stream دریافت می‌کند","context manager"]
],

"filelock":[
["SoftFileLock()","قفل نرم فایل","SoftFileLock(lock_file)","lock_file","قفل فایل با مکانیزم نرم ایجاد می‌کند","Lock"],
["acquire()","گرفتن قفل","lock.acquire(timeout=10)","timeout","تا زمان مشخص برای قفل صبر می‌کند","Lock"],
["release()","آزاد کردن قفل","lock.release()","—","قفل را آزاد می‌کند","بدون خروجی"],
["is_locked","بررسی قفل بودن","lock.is_locked","—","بررسی می‌کند قفل فعال است یا نه","bool"],
["lock_file","مسیر فایل قفل","lock.lock_file","—","مسیر فایل قفل را می‌دهد","str"],
["timeout","زمان انتظار","lock.timeout","—","مقدار timeout قفل را نگه می‌دارد","float"],
["blocking","حالت blocking","lock.blocking","—","تعیین می‌کند acquire منتظر بماند یا نه","bool"],
["__enter__()","گرفتن قفل با with","lock.__enter__()","—","برای استفاده با with قفل را می‌گیرد","Lock"],
["__exit__()","آزادسازی با with","lock.__exit__(...)","—","در پایان with قفل را آزاد می‌کند","بدون خروجی"]
]
};

for(const l of LIBS){
  if(EXTRA_TOOLS[l.id]){
    l.tools.push(...EXTRA_TOOLS[l.id]);
  }
}

const state={lib:"os",category:"همه",chain:[]};

const $=id=>document.getElementById(id);
const allTools=()=>LIBS.reduce((n,l)=>n+l.tools.length,0);

function init(){
  $("libraryStat").textContent=LIBS.length;
  $("methodStat").textContent=allTools();
  $("toolCount").textContent=LIBS.length;
  renderCategories();
  renderNav();
  renderCards();
  selectLib("os");

  $("startBtn").onclick=()=>{
    $("explore").scrollIntoView({behavior:"smooth"});
  };

  $("randomBtn").onclick=()=>{
    selectLib(LIBS[Math.floor(Math.random()*LIBS.length)].id);
  };

  $("clearBuilder").onclick=()=>{
    state.chain=[];
    renderChain();
  };

  $("runChain").onclick=runChain;
  $("copyCode").onclick=copyCode;
  $("modalClose").onclick=closeModal;

  $("modalBackdrop").onclick=e=>{
    if(e.target.id==="modalBackdrop") closeModal();
  };

  $("themeBtn").onclick=()=>{
    document.body.classList.toggle("light");
  };

  $("presentBtn").onclick=()=>{
    document.body.classList.toggle("presentation");
    toast(
      document.body.classList.contains("presentation")
      ? "حالت ارائه فعال شد"
      : "حالت عادی فعال شد"
    );
  };

  $("homeBtn").onclick=()=>{
    window.scrollTo({top:0,behavior:"smooth"});
  };

  $("searchInput").oninput=renderNav;
}

function renderCategories(){
  const cats=["همه",...new Set(LIBS.map(x=>x.cat))];

  $("categoryRow").innerHTML=cats.map(c=>
    `<button class="cat ${c===state.category?"active":""}" data-cat="${c}">${c}</button>`
  ).join("");

  document.querySelectorAll(".cat").forEach(b=>{
    b.onclick=()=>{
      state.category=b.dataset.cat;
      renderCategories();
      renderNav();
      renderCards();
    };
  });
}

function filteredLibs(){
  const q=$("searchInput").value.trim().toLowerCase();

  return LIBS.filter(l=>{
    const catOk=state.category==="همه"||l.cat===state.category;

    const text=(
      l.name+" "+
      l.desc+" "+
      l.tools.map(t=>t.join(" ")).join(" ")
    ).toLowerCase();

    return catOk&&(!q||text.includes(q));
  });
}

function renderNav(){
  const libs=filteredLibs();

  $("libraryNav").innerHTML=libs.map(l=>
    `<div class="nav-item ${l.id===state.lib?"active":""}" data-id="${l.id}">
      <span class="nav-icon">${l.icon}</span>
      <span>${l.name}</span>
    </div>`
  ).join("") ||
  `<div class="nav-group-title">موردی پیدا نشد.</div>`;

  document.querySelectorAll(".nav-item").forEach(x=>{
    x.onclick=()=>selectLib(x.dataset.id);
  });
}

function renderCards(){
  const libs=filteredLibs();

  $("libraryGrid").innerHTML=libs.map(l=>
    `<article class="lib-card" data-id="${l.id}">
      <div class="lib-icon">${l.icon}</div>
      <h3>${l.name}</h3>
      <p>${l.desc}</p>
      <span class="lib-meta">${l.tools.length} ابزار</span>
    </article>`
  ).join("");

  document.querySelectorAll(".lib-card").forEach(x=>{
    x.onclick=()=>selectLib(x.dataset.id);
  });
}

function selectLib(id){
  state.lib=id;

  const l=LIBS.find(x=>x.id===id);
  if(!l)return;

  $("labTitle").textContent=l.name+" — آزمایشگاه";

  $("toolList").innerHTML=l.tools.map((t,i)=>
    `<div class="tool-card" data-i="${i}">
      <div>
        <div class="tool-name">${t[0]}</div>
        <div class="tool-desc">${t[1]}</div>
      </div>
      <button class="help-btn" data-help="${i}">?</button>
    </div>`
  ).join("");

  document.querySelectorAll(".tool-card").forEach(c=>{
    c.onclick=e=>{
      if(e.target.classList.contains("help-btn"))return;

      addTool(
        l.tools[+c.dataset.i],
        l
      );
    };
  });

  document.querySelectorAll(".help-btn").forEach(b=>{
    b.onclick=e=>{
      e.stopPropagation();
      openModal(
        l.tools[+b.dataset.help],
        l
      );
    };
  });

  renderNav();
  renderCards();

  $("labSection").scrollIntoView({
    behavior:"smooth",
    block:"start"
  });
}

function parseSignatureArgs(signature){
  const m=signature.match(/\((.*)\)/);

  if(!m)return [];

  const body=m[1].trim();

  if(!body || body==="..." || body==="—"){
    return [];
  }

  return body
    .split(",")
    .map(x=>x.trim())
    .filter(Boolean)
    .map(x=>x.replace(/\s*=.*$/,""));
}

function askToolArgs(t){
  const args=parseSignatureArgs(t[2]);

  if(!args.length)return {};

  const values={};

  for(const arg of args){

    const optional=
      /optional|None|اختیاری/i.test(
        t[3]+" "+t[2]
      ) &&
      arg!==args[0];

    let label=arg.replace(/\*/g,"");
    let def="";

    if(
      arg==="path"||
      arg==="filename"||
      arg==="source"||
      arg==="url"||
      arg==="name"||
      arg==="src"||
      arg==="dst"||
      arg==="f1"||
      arg==="f2"||
      arg==="pdf_path"
    ){
      def=selectedPath||"";
    }

    if(arg==="pattern"){
      def="*.txt";
    }

    if(arg==="text"){
      def="Hello Python";
    }

    if(arg==="seconds"){
      def="2";
    }

    const v=prompt(
      `مقدار ${label} را وارد کن${optional?" (اختیاری)":""}:`,
      def
    );

    if(v===null)return null;

    if(v!=="" || !optional){
      values[arg]=v;
    }
  }

  return values;
}

function fillSignature(signature,args){
  return signature
    .replace(
      /([A-Za-z_][\w]*)\s*=\s*[^,)]+/g,
      "$1"
    )
    .replace(
      /([A-Za-z_][\w]*)/g,
      m=>Object.prototype.hasOwnProperty.call(args,m)
        ? JSON.stringify(args[m])
        : m
    );
}

function addTool(t,l){
  const args=askToolArgs(t);

  if(args===null)return;

  const customized=[
    t[0],
    t[1],
    fillSignature(t[2],args),
    t[3],
    t[4],
    t[5],
    args
  ];

  state.chain.push({
    lib:l.name,
    tool:customized,
    args
  });

  renderChain();

  if(!statePreview(customized,l,args)){
    preview(customized,l,args);
  }
}

function renderChain(){
  const c=$("chain");

  if(!state.chain.length){

    c.className="chain empty";

    c.innerHTML=`
      <div class="empty-chain">
        <div class="drop-icon">＋</div>
        <b>بلوک‌ها را اینجا جمع کن</b>
        <span>
          با کلیک روی هر ابزار، یک بلوک به کد اضافه می‌شود.
        </span>
      </div>
    `;

    generateCode();
    return;
  }

  c.className="chain";

  c.innerHTML=state.chain.map((x,i)=>
    `<div class="chain-block">
      <span class="chain-index">
        ${String(i+1).padStart(2,"0")}
      </span>
      <code>${escapeHtml(x.tool[2])}</code>
      <button class="remove-block" data-i="${i}">×</button>
    </div>`
  ).join("");

  document.querySelectorAll(".remove-block").forEach(b=>{
    b.onclick=()=>{
      state.chain.splice(+b.dataset.i,1);
      renderChain();
    };
  });

  generateCode();
}

function generateCode(){

  if(!state.chain.length){
    $("generatedCode").textContent=
      "# برای ساخت کد، یک ابزار انتخاب کنید...";
    return;
  }

  const imports=new Set(
    state.chain
      .map(x=>x.lib)
      .filter(x=>!["os","pathlib"].includes(x))
  );

  let lines=[
    ...imports.map(x=>`# import ${x}`),
    "",
    ...state.chain.map(x=>x.tool[2])
  ];

  $("generatedCode").textContent=lines.join("\n");
}

function preview(t,l){
  const n=t[0];
  let html="";

  if(n==="getcwd()"){
    html=`
      مسیر فعلی شبیه این است:
      <br>
      <span class="preview-file">
        📁 <b>PythonToolkitLab</b> / demo
      </span>
    `;
  }

  else if(n==="listdir()"){
    html=`
      <div class="preview-file">📄 students.csv</div>
      <div class="preview-file">📄 report.xlsx</div>
      <div class="preview-file">📁 data</div>
      <div class="preview-file">📁 output</div>
    `;
  }

  else if(n.includes("sha256")){
    html=`
      <div class="preview-progress">
        <i></i>
      </div>
      <p>
        داده‌ی <b>Hello</b>
        →
        یک hash با طول ثابت 256-bit
      </p>
    `;
  }

  else if(n==="hexdigest()"){
    html=`
      <code dir="ltr">
        185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969
      </code>
    `;
  }

  else if(
    [
      "append()",
      "DataFrame()",
      "read_csv()",
      "head()",
      "sort_values()"
    ].includes(n)
  ){
    html=`
      <table class="preview-table">
        <tr>
          <th>name</th>
          <th>score</th>
          <th>city</th>
        </tr>
        <tr>
          <td>Ali</td>
          <td>20</td>
          <td>Tehran</td>
        </tr>
        <tr>
          <td>Sara</td>
          <td>18</td>
          <td>Yazd</td>
        </tr>
        <tr>
          <td>Reza</td>
          <td>19</td>
          <td>Tabriz</td>
        </tr>
      </table>
    `;
  }

  else if(
    [
      "Workbook()",
      "load_workbook()",
      "save()"
    ].includes(n)
  ){
    html=`
      📊 <b>students.xlsx</b>
      <br>
      <span style="color:#7e8aa5">
        Sheet1 → 2 rows → saved
      </span>
    `;
  }

  else if(
    n.includes("Observer") ||
    ["schedule()","start()","stop()"].includes(n)
  ){
    html=`
      👁 ناظر فعال است
      <br>
      <span style="color:#31d5c8">
        event: modified → report.xlsx
      </span>
    `;
  }

  else if(n==="send2trash()"){
    html=`
      🗑 <b>old_file.txt</b> → Recycle Bin
      <br>
      <span style="color:#7e8aa5">
        فایل حذف دائمی نشده است.
      </span>
    `;
  }

  else if(n==="fnmatch()"){
    html=`
      <code dir="ltr">
        fnmatch("report.xlsx", "*.xlsx")
      </code>
      <br>
      نتیجه:
      <b style="color:#6ee7d8">True</b>
    `;
  }

  else if(n==="sleep()"){
    html=`
      ⏱ شبیه‌سازی تأخیر:
      <b>2 seconds</b>
      <br>
      <div class="preview-progress">
        <i style="width:35%"></i>
      </div>
    `;
  }

  else if(n==="platform.system()"){
    html=`
      سیستم‌عامل:
      <b>Windows</b>
    `;
  }

  else if(n==="status_code"){
    html=`
      HTTP Status:
      <b style="color:#6ee7d8">
        200 OK
      </b>
    `;
  }

  else if(n==="guess_type()"){
    html=`
      report.pdf →
      <b>application/pdf</b>
    `;
  }

  else if(n==="exists()"){
    html=`
      Path("report.xlsx").exists()
      →
      <b style="color:#6ee7d8">True</b>
    `;
  }

  else if(n==="disk_usage()"){
    html=`
      💾 Total: 512 GB
      &nbsp;
      Used: 287 GB
      &nbsp;
      Free: 225 GB
    `;
  }

  else if(n==="TemporaryDirectory()"){
    html=`
      📁 <b>Temp directory</b>
      <br>
      <span style="color:#7e8aa5">
        فقط برای مدت اجرای برنامه نگه داشته می‌شود.
      </span>
    `;
  }

  else if(n==="connect()"){
    html=`
      🗄 SQLite connection →
      <b>connected</b>
    `;
  }

  else if(n==="fetchall()"){
    html=`
      <table class="preview-table">
        <tr>
          <th>id</th>
          <th>name</th>
        </tr>
        <tr>
          <td>1</td>
          <td>Ali</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Sara</td>
        </tr>
      </table>
    `;
  }

  else{
    html=`
      <div class="preview-file">
        ✓ ${t[1]}
      </div>
      <br>
      <span style="color:#7e8aa5">
        این پیش‌نمایش رفتار ابزار را در محیط ارائه شبیه‌سازی می‌کند.
      </span>
    `;
  }

  $("resultBody").innerHTML=html;
  $("resultStatus").textContent="اجرا شد ✓";
}

function runChain(){

  if(!state.chain.length){
    toast("اول چند بلوک به زنجیره اضافه کن.");
    return;
  }

  $("resultBody").innerHTML=`
    <div class="preview-progress">
      <i style="width:100%"></i>
    </div>
    <br>
    ✓ ${state.chain.length}
    مرحله در زنجیره اجرا شد.
    نتیجه‌ی هر مرحله در کد ساخته‌شده قابل مشاهده است.
  `;

  $("resultStatus").textContent="موفق ✓";

  toast("زنجیره‌ی کد اجرا شد.");
}

function openModal(t,l){
  $("modalTitle").textContent=t[0];
  $("modalDesc").textContent=t[1];
  $("modalSignature").textContent=t[2];
  $("modalWhat").textContent=t[1];
  $("modalArgs").textContent=t[3];
  $("modalType").textContent=l.name;
  $("modalOutput").textContent=t[4];

  $("modalBackdrop").classList.add("open");
}

function closeModal(){
  $("modalBackdrop").classList.remove("open");
}

function copyCode(){
  navigator.clipboard?.writeText(
    $("generatedCode").textContent
  );

  toast("کد کپی شد.");
}

function toast(msg){
  const t=$("toast");

  t.textContent=msg;
  t.classList.add("show");

  setTimeout(
    ()=>t.classList.remove("show"),
    1800
  );
}

function escapeHtml(s){
  return s.replace(
    /[&<>"']/g,
    m=>({
      "&":"&amp;",
      "<":"&lt;",
      ">":"&gt;",
      '"':"&quot;",
      "'":"&#039;"
    }[m])
  );
}

/* STATEFUL LIVE SIMULATOR */

const VFS={
  root:{
    type:"folder",
    name:"PythonLab",
    children:[
      {
        type:"file",
        name:"photo.jpg",
        size:"2.4 MB",
        kind:"image"
      },
      {
        type:"file",
        name:"video.mp4",
        size:"18.7 MB",
        kind:"video"
      },
      {
        type:"file",
        name:"report.docx",
        size:"84 KB",
        kind:"word"
      },
      {
        type:"file",
        name:"presentation.pptx",
        size:"1.2 MB",
        kind:"powerpoint"
      }
    ]
  }
};

let selectedPath=null;
let liveLog=[];

function resetVirtualFS(){

  VFS.root.children=[
    {
      type:"file",
      name:"photo.jpg",
      size:"2.4 MB",
      kind:"image"
    },
    {
      type:"file",
      name:"video.mp4",
      size:"18.7 MB",
      kind:"video"
    },
    {
      type:"file",
      name:"report.docx",
      size:"84 KB",
      kind:"word"
    },
    {
      type:"file",
      name:"presentation.pptx",
      size:"1.2 MB",
      kind:"powerpoint"
    }
  ];

  selectedPath=null;
  liveLog=[];

  renderFileExplorer();
  renderLiveLog("محیط نمایشی به حالت اولیه برگشت.");
  toast("محیط فایل‌ها ریست شد.");
}

function iconFor(x){

  if(x.type==="folder")return "📁";
  if(x.kind==="image")return "🖼️";
  if(x.kind==="video")return "🎬";
  if(x.kind==="word")return "📘";
  if(x.kind==="powerpoint")return "📙";
  if(x.kind==="excel")return "📊";

  return "📄";
}

function findChild(n){
  return VFS.root.children.find(
    x=>x.name===n
  );
}

function renderFileExplorer(){

  const el=document.getElementById("liveExplorer");

  if(!el)return;

  const a=VFS.root.children;

  el.innerHTML=`
    <div class="explorer-head">
      <div>
        <span class="eyebrow">
          VIRTUAL FILE EXPLORER
        </span>
        <b>PythonLab /</b>
      </div>

      <button
        class="reset-files"
        type="button"
        id="resetFiles"
      >
        ↻ بازنشانی
      </button>
    </div>

    <div class="explorer-toolbar">
      <span>
        📁 ${a.filter(x=>x.type==="folder").length} پوشه
      </span>

      <span>•</span>

      <span>
        📄 ${a.filter(x=>x.type==="file").length} فایل
      </span>
    </div>

    <div class="file-grid">

      ${a.map(x=>
        `<button
          type="button"
          class="file-item ${selectedPath===x.name?"selected":""}"
          data-file="${escapeHtml(x.name)}"
        >
          <span class="big-file-icon">
            ${iconFor(x)}
          </span>

          <span class="file-name">
            ${escapeHtml(x.name)}
          </span>

          <span class="file-meta">
            ${
              x.type==="folder"
              ? (x.children?.length||0)+" مورد"
              : x.size
            }
          </span>
        </button>`
      ).join("")}

      ${
        a.length===0
        ? '<div class="empty-files">پوشه خالی است.</div>'
        : ""
      }

    </div>
  `;

  document.querySelectorAll(".file-item").forEach(b=>{
    b.onclick=()=>{
      selectedPath=b.dataset.file;

      renderFileExplorer();

      renderLiveLog(
        `انتخاب شد: ${b.dataset.file}`
      );
    };
  });

  document.getElementById("resetFiles").onclick=
    resetVirtualFS;
}

function renderLiveLog(msg){

  if(msg){

    liveLog.unshift({
      time:new Date().toLocaleTimeString(
        "fa-IR",
        {
          hour:"2-digit",
          minute:"2-digit",
          second:"2-digit"
        }
      ),
      msg
    });
  }

  const e=document.getElementById("liveLog");

  if(e){

    e.innerHTML=
      liveLog
        .slice(0,7)
        .map(x=>
          `<div class="log-line">
            <span>${x.time}</span>
            <b>${escapeHtml(x.msg)}</b>
          </div>`
        )
        .join("")
      ||
      '<div class="empty-log">هنوز دستوری اجرا نشده است.</div>';
  }
}

function statePreview(t,l,args={}){

  const n=t[0];

  const val=(k,f="")=>
    Object.prototype.hasOwnProperty.call(args,k)
      ? String(args[k])
      : f;

  if(n==="remove()"){

    const target=
      val("path",selectedPath||"");

    const i=
      VFS.root.children.findIndex(
        x=>x.name===target
      );

    if(i<0){
      toast(
        `فایل یا پوشه «${target}» پیدا نشد.`
      );
      return true;
    }

    VFS.root.children.splice(i,1);

    if(selectedPath===target){
      selectedPath=null;
    }

    renderFileExplorer();

    renderLiveLog(
      `os.remove("${target}") → حذف شد`
    );

    $("resultBody").innerHTML=`
      <div class="live-success">
        ✓ «${escapeHtml(target)}»
        از File Explorer نمایشی حذف شد
      </div>

      <p>
        <code dir="ltr">
          os.remove("${escapeHtml(target)}")
        </code>
      </p>

      <div class="state-count">
        اکنون ${VFS.root.children.length}
        آیتم باقی مانده است.
      </div>
    `;

    $("resultStatus").textContent=
      "STATE UPDATED ✓";

    return true;
  }

  if(
    n==="mkdir()" ||
    n==="makedirs()"
  ){

    const name=val("path");

    if(!name)return true;

    let f=VFS.root;

    for(
      const part of name
        .split("/")
        .map(x=>x.trim())
        .filter(Boolean)
    ){

      let q=f.children.find(
        x=>
          x.type==="folder" &&
          x.name===part
      );

      if(!q){

        q={
          type:"folder",
          name:part,
          children:[]
        };

        f.children.push(q);
      }

      f=q;
    }

    renderFileExplorer();

    renderLiveLog(
      `${n} → ${name} ساخته شد`
    );

    $("resultBody").innerHTML=`
      <div class="live-success">
        📁 ساختار «${escapeHtml(name)}» ساخته شد
      </div>

      <p>
        <code dir="ltr">
          os.${
            n==="mkdir()"
            ? `mkdir(${JSON.stringify(name)})`
            : `makedirs(${JSON.stringify(name)})`
          }
        </code>
      </p>
    `;

    $("resultStatus").textContent=
      "FOLDER CREATED ✓";

    return true;
  }

  if(n==="rename()"){

    const target=
      val("src",selectedPath||"");

    const dest=val("dst");

    const x=findChild(target);

    if(!x){

      toast(
        `«${target}» پیدا نشد.`
      );

      return true;
    }

    if(!dest)return true;

    x.name=dest;
    selectedPath=dest;

    renderFileExplorer();

    renderLiveLog(
      `${target} → ${dest}`
    );

    $("resultBody").innerHTML=`
      <div class="live-success">
        ✓ «${escapeHtml(target)}»
        به «${escapeHtml(dest)}»
        تغییر نام داد
      </div>

      <p>
        <code dir="ltr">
          os.rename(
            ${JSON.stringify(target)},
            ${JSON.stringify(dest)}
          )
        </code>
      </p>
    `;

    $("resultStatus").textContent=
      "RENAMED ✓";

    return true;
  }

  if(n==="listdir()"){

    const path=val("path","");

    $("resultBody").innerHTML=`
      <div class="state-list">
        ${
          VFS.root.children
            .map(x=>
              `<span>${escapeHtml(x.name)}</span>`
            )
            .join("")
        }
      </div>

      <p>
        مسیر انتخابی:
        <code dir="ltr">
          ${escapeHtml(path||".")}
        </code>
      </p>
    `;

    $("resultStatus").textContent=
      "READ STATE ✓";

    return true;
  }

  if(n==="exists()"){

    const target=
      val("path",selectedPath||"");

    $("resultBody").innerHTML=`
      <code dir="ltr">
        Path(${JSON.stringify(target)}).exists()
      </code>
      <br>
      <b class="live-true">
        ${findChild(target)?"True":"False"}
      </b>
    `;

    $("resultStatus").textContent=
      "READ STATE ✓";

    return true;
  }

  if(n==="send2trash()"){

    const target=
      val("path",selectedPath||"");

    const i=
      VFS.root.children.findIndex(
        x=>x.name===target
      );

    if(i<0){

      toast(
        `«${target}» پیدا نشد.`
      );

      return true;
    }

    VFS.root.children.splice(i,1);
    selectedPath=null;

    renderFileExplorer();

    renderLiveLog(
      `send2trash("${target}") → انتقال به سطل زباله`
    );

    $("resultBody").innerHTML=`
      <div class="live-success">
        ♻ «${escapeHtml(target)}»
        به سطل زباله‌ی نمایشی منتقل شد
      </div>

      <p>
        <code dir="ltr">
          send2trash(${JSON.stringify(target)})
        </code>
      </p>
    `;

    $("resultStatus").textContent=
      "TRASHED ✓";

    return true;
  }

  if(
    n==="copy()" ||
    n==="move()"
  ){

    const src=val("src");
    const dst=val("dst");

    const x=findChild(src);

    if(!x){

      toast(
        `«${src}» پیدا نشد.`
      );

      return true;
    }

    if(!dst)return true;

    const copy=
      JSON.parse(
        JSON.stringify(x)
      );

    copy.name=
      dst.split("/").pop();

    if(n==="copy()"){

      VFS.root.children.push(copy);

    }else{

      x.name=copy.name;
    }

    renderFileExplorer();

    renderLiveLog(
      `${n} ${src} → ${dst}`
    );

    $("resultBody").innerHTML=`
      <div class="live-success">
        ✓ ${
          n==="copy()"
          ? "یک کپی ایجاد شد"
          : "آیتم جابه‌جا شد"
        }
      </div>

      <p>
        <code dir="ltr">
          shutil.${n}
          (${JSON.stringify(src)},
          ${JSON.stringify(dst)})
        </code>
      </p>
    `;

    $("resultStatus").textContent=
      "STATE UPDATED ✓";

    return true;
  }

  if(n==="rmtree()"){

    const target=val("path");

    const i=
      VFS.root.children.findIndex(
        x=>
          x.name===target &&
          x.type==="folder"
      );

    if(i<0){

      toast(
        `پوشه «${target}» پیدا نشد.`
      );

      return true;
    }

    VFS.root.children.splice(i,1);

    selectedPath=null;

    renderFileExplorer();

    renderLiveLog(
      `shutil.rmtree("${target}") → حذف پوشه`
    );

    $("resultBody").innerHTML=`
      <div class="live-success">
        ✓ پوشه «${escapeHtml(target)}»
        و محتویات نمایشی آن حذف شد
      </div>
    `;

    $("resultStatus").textContent=
      "STATE UPDATED ✓";

    return true;
  }

  if(n==="fnmatch()"){

    const name=val("name");
    const pattern=val(
      "pattern",
      "*.txt"
    );

    const regex=
      new RegExp(
        "^"+
        pattern
          .replace(
            /[.+^${}()|[\]\\]/g,
            "\\$&"
          )
          .replace(/\*/g,".*")
          .replace(/\?/g,".")
        +"$"
      );

    $("resultBody").innerHTML=`
      <code dir="ltr">
        fnmatch(
          ${JSON.stringify(name)},
          ${JSON.stringify(pattern)}
        )
      </code>

      <br>

      نتیجه:
      <b style="color:#6ee7d8">
        ${regex.test(name)}
      </b>
    `;

    $("resultStatus").textContent=
      "EXECUTED ✓";

    return true;
  }

  return false;
}

init();
