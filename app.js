/* =========================================================
   Python Toolkit Lab
   Expanded + Stateful Virtual Simulator
   ========================================================= */

const LIBS = [
  {
    id:"os", name:"os", icon:"⌂", cat:"استاندارد",
    desc:"کار با سیستم‌عامل، مسیرها، فایل‌ها و پوشه‌ها",
    tools:[
      ["getcwd()","نمایش مسیر فعلی","os.getcwd()","بدون آرگومان","مسیر پوشه‌ی فعلی را برمی‌گرداند","رشته‌ی مسیر"],
      ["listdir()","نمایش محتویات پوشه","os.listdir(path)","path اختیاری","نام فایل‌ها و پوشه‌ها را می‌گیرد","لیست نام‌ها"],
      ["mkdir()","ساخت یک پوشه","os.mkdir(path)","path","یک پوشه ایجاد می‌کند","پوشه‌ی جدید"],
      ["makedirs()","ساخت پوشه‌های تو‌در‌تو","os.makedirs(path, exist_ok=False)","path, exist_ok","چند سطح پوشه را ایجاد می‌کند","ساختار پوشه"],
      ["remove()","حذف فایل","os.remove(path)","path","یک فایل را حذف می‌کند","بدون خروجی"],
      ["rename()","تغییر نام/مسیر","os.rename(src, dst)","src, dst","فایل یا پوشه را تغییر نام می‌دهد","بدون خروجی"],
      ["replace()","جایگزینی فایل/مسیر","os.replace(src, dst)","src, dst","مسیر مقصد را با مبدا جایگزین می‌کند","بدون خروجی"],
      ["getsize()","اندازه فایل","os.path.getsize(path)","path","اندازه فایل را برحسب بایت می‌دهد","int"],
      ["isfile()","بررسی فایل بودن","os.path.isfile(path)","path","بررسی می‌کند مسیر یک فایل است","True / False"],
      ["isdir()","بررسی پوشه بودن","os.path.isdir(path)","path","بررسی می‌کند مسیر یک پوشه است","True / False"],
      ["abspath()","ساخت مسیر مطلق","os.path.abspath(path)","path","مسیر مطلق را تولید می‌کند","str"],
      ["basename()","گرفتن نام فایل","os.path.basename(path)","path","آخرین بخش مسیر را برمی‌گرداند","str"],
      ["dirname()","گرفتن پوشه والد","os.path.dirname(path)","path","پوشه والد مسیر را می‌دهد","str"],
      ["join()","ساخت مسیر","os.path.join(a, b)","a, b","چند بخش مسیر را ترکیب می‌کند","str"]
    ]
  },

  {
    id:"pathlib", name:"pathlib", icon:"◈", cat:"فایل",
    desc:"کار مدرن و شیءگرا با مسیرها و فایل‌ها",
    tools:[
      ["Path()","ساخت شیء مسیر","Path(path)","path","یک مسیر قابل پردازش می‌سازد","Path object"],
      ["exists()","بررسی وجود مسیر","Path(path).exists()","path","وجود فایل یا پوشه را بررسی می‌کند","True / False"],
      ["is_file()","بررسی فایل بودن","Path(path).is_file()","path","بررسی می‌کند مسیر فایل است","True / False"],
      ["is_dir()","بررسی پوشه بودن","Path(path).is_dir()","path","بررسی می‌کند مسیر پوشه است","True / False"],
      ["glob()","پیدا کردن فایل با الگو","Path(path).glob(pattern)","path, pattern","فایل‌های مطابق الگو را پیدا می‌کند","iterator"],
      ["iterdir()","پیمایش محتویات","Path(path).iterdir()","path","محتویات یک پوشه را پیمایش می‌کند","iterator"],
      ["read_text()","خواندن متن فایل","Path(path).read_text()","path, encoding اختیاری","محتوای متنی فایل را می‌خواند","str"],
      ["write_text()","نوشتن متن فایل","Path(path).write_text(text)","path, text","متن را در فایل می‌نویسد","int"],
      ["mkdir()","ساخت پوشه","Path(path).mkdir()","path","پوشه ایجاد می‌کند","بدون خروجی"],
      ["unlink()","حذف فایل","Path(path).unlink()","path","فایل را حذف می‌کند","بدون خروجی"],
      ["rename()","تغییر نام","Path(path).rename(target)","path, target","نام یا مسیر را تغییر می‌دهد","Path"],
      ["suffix","گرفتن پسوند","Path(path).suffix","path","پسوند فایل را برمی‌گرداند","str"],
      ["name","گرفتن نام","Path(path).name","path","نام فایل یا پوشه را می‌دهد","str"]
    ]
  },

  {
    id:"shutil", name:"shutil", icon:"↔", cat:"فایل",
    desc:"کپی، جابه‌جایی و مدیریت سطح بالاتر فایل‌ها",
    tools:[
      ["copy()","کپی فایل","shutil.copy(src, dst)","src, dst","فایل را کپی می‌کند","مسیر مقصد"],
      ["copy2()","کپی همراه metadata","shutil.copy2(src, dst)","src, dst","فایل را همراه metadata کپی می‌کند","مسیر مقصد"],
      ["copytree()","کپی یک پوشه","shutil.copytree(src, dst)","src, dst","کل ساختار پوشه را کپی می‌کند","پوشه‌ی جدید"],
      ["move()","جابه‌جایی","shutil.move(src, dst)","src, dst","فایل یا پوشه را منتقل می‌کند","مسیر جدید"],
      ["rmtree()","حذف پوشه و محتویات","shutil.rmtree(path)","path","یک پوشه را همراه محتویات حذف می‌کند","بدون خروجی"],
      ["disk_usage()","اطلاعات فضای دیسک","shutil.disk_usage(path)","path","فضای کل، استفاده‌شده و آزاد را می‌دهد","total/used/free"],
      ["which()","پیدا کردن برنامه","shutil.which(cmd)","cmd","مسیر اجرای یک برنامه را پیدا می‌کند","str / None"],
      ["make_archive()","ساخت آرشیو","shutil.make_archive(base, format, root)","base, format, root","از فایل‌ها آرشیو می‌سازد","مسیر آرشیو"]
    ]
  },

  {
    id:"concurrent.futures", name:"concurrent.futures", icon:"⚡", cat:"هم‌زمانی",
    desc:"اجرای چند کار به‌صورت هم‌زمان",
    tools:[
      ["ThreadPoolExecutor","اجرای هم‌زمان کارهای I/O","ThreadPoolExecutor(max_workers=None)","تعداد worker اختیاری","چند کار I/O را هم‌زمان اجرا می‌کند","Futureها"],
      ["ProcessPoolExecutor","اجرای کارهای CPU","ProcessPoolExecutor(max_workers=None)","تعداد worker اختیاری","کارها را در processهای جدا اجرا می‌کند","Futureها"],
      ["submit()","ارسال یک کار","executor.submit(fn, *args)","تابع + آرگومان‌ها","یک کار را برای اجرا می‌فرستد","Future"],
      ["map()","اجرای تابع روی چند داده","executor.map(fn, iterable)","تابع + داده‌ها","تابع را روی چند ورودی اجرا می‌کند","نتایج"],
      ["result()","دریافت نتیجه","future.result(timeout=None)","timeout اختیاری","نتیجه کار را دریافت می‌کند","مقدار تابع"],
      ["as_completed()","دریافت کارهای تمام‌شده","as_completed(fs)","Futureها","Futureها را هنگام پایان دریافت می‌کند","iterator"]
    ]
  },

  {
    id:"hashlib", name:"hashlib", icon:"#", cat:"امنیت",
    desc:"ساخت hash برای بررسی یکپارچگی و شناسه داده",
    tools:[
      ["sha256()","ساخت SHA-256","hashlib.sha256(data)","data به صورت bytes","hash 256 بیتی می‌سازد","hash object"],
      ["sha512()","ساخت SHA-512","hashlib.sha512(data)","data به صورت bytes","hash قوی‌تر SHA می‌سازد","hash object"],
      ["sha1()","ساخت SHA-1","hashlib.sha1(data)","data به صورت bytes","hash 160 بیتی می‌سازد","hash object"],
      ["md5()","ساخت MD5","hashlib.md5(data)","bytes","hash قدیمی برای کاربردهای غیرامنیتی","hash object"],
      ["hexdigest()","نمایش hash متنی","hash.hexdigest()","—","hash را به رشته hex تبدیل می‌کند","str"],
      ["digest()","دریافت hash باینری","hash.digest()","—","خروجی خام hash را می‌دهد","bytes"],
      ["update()","افزودن داده به hash","hash.update(data)","bytes","داده بیشتری به hash اضافه می‌کند","بدون خروجی"]
    ]
  },

  {
    id:"openpyxl", name:"openpyxl", icon:"▦", cat:"داده",
    desc:"خواندن و ساخت فایل‌های Excel با فرمت xlsx",
    tools:[
      ["Workbook()","ساخت Excel جدید","Workbook()","—","یک workbook تازه می‌سازد","Workbook"],
      ["load_workbook()","باز کردن Excel","load_workbook(filename)","filename","فایل xlsx را باز می‌کند","Workbook"],
      ["active","انتخاب Sheet فعال","workbook.active","—","برگه فعال را برمی‌گرداند","Worksheet"],
      ["cell()","دسترسی به سلول","sheet.cell(row, column)","row, column","یک سلول مشخص را انتخاب می‌کند","Cell"],
      ["append()","افزودن ردیف","sheet.append(iterable)","لیست/iterable","یک ردیف اضافه می‌کند","بدون خروجی"],
      ["save()","ذخیره Excel","workbook.save(filename)","filename","فایل را ذخیره می‌کند","xlsx"],
      ["create_sheet()","ساخت Sheet","workbook.create_sheet(title)","title","یک برگه جدید می‌سازد","Worksheet"],
      ["remove()","حذف Sheet","workbook.remove(worksheet)","worksheet","یک برگه را حذف می‌کند","بدون خروجی"],
      ["max_row","تعداد ردیف‌ها","sheet.max_row","—","آخرین ردیف استفاده‌شده","int"],
      ["max_column","تعداد ستون‌ها","sheet.max_column","—","آخرین ستون استفاده‌شده","int"]
    ]
  },

  {
    id:"pandas", name:"pandas", icon:"▤", cat:"داده",
    desc:"پردازش و تحلیل داده‌های جدولی",
    tools:[
      ["read_csv()","خواندن CSV","pd.read_csv(path)","path + options","CSV را به DataFrame تبدیل می‌کند","DataFrame"],
      ["read_excel()","خواندن Excel","pd.read_excel(path)","path + options","Excel را می‌خواند","DataFrame"],
      ["DataFrame()","ساخت جدول داده","pd.DataFrame(data)","data","ساختار جدولی می‌سازد","DataFrame"],
      ["head()","نمایش ردیف‌های اول","df.head(n=5)","n اختیاری","ابتدای جدول را نمایش می‌دهد","DataFrame"],
      ["tail()","نمایش ردیف‌های آخر","df.tail(n=5)","n اختیاری","انتهای جدول را نمایش می‌دهد","DataFrame"],
      ["drop()","حذف ردیف یا ستون","df.drop(labels, axis=0)","labels, axis","بخش‌هایی از جدول را حذف می‌کند","DataFrame"],
      ["sort_values()","مرتب‌سازی","df.sort_values(by)","by + options","داده را مرتب می‌کند","DataFrame"],
      ["groupby()","گروه‌بندی داده","df.groupby(by)","by","داده‌ها را گروه‌بندی می‌کند","GroupBy"],
      ["describe()","خلاصه آماری","df.describe()","—","آمار توصیفی داده را می‌دهد","DataFrame"],
      ["info()","اطلاعات DataFrame","df.info()","—","اطلاعات ستون‌ها و نوع داده را نمایش می‌دهد","بدون خروجی"],
      ["to_csv()","ذخیره CSV","df.to_csv(path)","path + options","DataFrame را CSV می‌کند","CSV"],
      ["to_excel()","ذخیره Excel","df.to_excel(path)","path + options","DataFrame را Excel می‌کند","xlsx"],
      ["shape","ابعاد جدول","df.shape","—","تعداد ردیف و ستون را می‌دهد","tuple"],
      ["columns","نام ستون‌ها","df.columns","—","نام ستون‌ها را برمی‌گرداند","Index"]
    ]
  },

  {
    id:"watchdog", name:"watchdog", icon:"◉", cat:"فایل",
    desc:"نظارت بر تغییرات فایل‌ها و پوشه‌ها",
    tools:[
      ["Observer","ایجاد ناظر","Observer()","—","یک ناظر فایل ایجاد می‌کند","Observer"],
      ["FileSystemEventHandler","تعریف واکنش","FileSystemEventHandler","—","رویدادهای فایل را مدیریت می‌کند","handler"],
      ["schedule()","تعیین پوشه برای نظارت","observer.schedule(handler, path, recursive=False)","handler, path, recursive","مسیر را برای نظارت تعیین می‌کند","بدون خروجی"],
      ["start()","شروع نظارت","observer.start()","—","نظارت را آغاز می‌کند","thread"],
      ["stop()","توقف نظارت","observer.stop()","—","نظارت را متوقف می‌کند","بدون خروجی"],
      ["join()","منتظر ماندن","observer.join()","—","تا پایان thread صبر می‌کند","بدون خروجی"],
      ["on_created()","واکنش به ساخت","on_created(event)","event","هنگام ساخت فایل اجرا می‌شود","بدون خروجی"],
      ["on_deleted()","واکنش به حذف","on_deleted(event)","event","هنگام حذف فایل اجرا می‌شود","بدون خروجی"],
      ["on_modified()","واکنش به تغییر","on_modified(event)","event","هنگام تغییر فایل اجرا می‌شود","بدون خروجی"],
      ["on_moved()","واکنش به جابه‌جایی","on_moved(event)","event","هنگام جابه‌جایی اجرا می‌شود","بدون خروجی"]
    ]
  },

  {
    id:"schedule", name:"schedule", icon:"◷", cat:"زمان",
    desc:"اجرای خودکار کارها طبق زمان‌بندی",
    tools:[
      ["every()","تعیین فاصله","schedule.every(interval)","عدد فاصله","فاصله اجرای کار را تعیین می‌کند","Job"],
      ["seconds","واحد ثانیه","schedule.every(10).seconds","—","زمان‌بندی بر اساس ثانیه","Job"],
      ["minutes","واحد دقیقه","schedule.every(5).minutes","—","زمان‌بندی بر اساس دقیقه","Job"],
      ["hours","واحد ساعت","schedule.every(2).hours","—","زمان‌بندی بر اساس ساعت","Job"],
      ["days","واحد روز","schedule.every().day","—","زمان‌بندی روزانه","Job"],
      ["weeks","واحد هفته","schedule.every().week","—","زمان‌بندی هفتگی","Job"],
      ["do()","تعیین تابع","job.do(fn)","تابع + آرگومان‌ها","مشخص می‌کند چه کاری انجام شود","Job"],
      ["run_pending()","اجرای کارهای موعدرسیده","schedule.run_pending()","—","Jobهای آماده را اجرا می‌کند","بدون خروجی"],
      ["clear()","پاک کردن زمان‌بندی‌ها","schedule.clear()","tag اختیاری","Jobها را پاک می‌کند","بدون خروجی"],
      ["cancel_job()","لغو یک Job","schedule.cancel_job(job)","job","یک زمان‌بندی را لغو می‌کند","بدون خروجی"]
    ]
  },

  {
    id:"send2trash", name:"Send2Trash", icon:"♻", cat:"فایل",
    desc:"انتقال فایل به سطل زباله به‌جای حذف مستقیم",
    tools:[
      ["send2trash()","انتقال به Recycle Bin / Trash","send2trash(path)","path","فایل یا پوشه را به سطل زباله می‌فرستد","بدون خروجی"]
    ]
  },

  {
    id:"fnmatch", name:"fnmatch", icon:"✣", cat:"فایل",
    desc:"تطبیق نام فایل‌ها با الگوهایی مثل *.txt",
    tools:[
      ["fnmatch()","تطبیق نام با الگو","fnmatch(name, pattern)","name, pattern","بررسی سازگاری نام با الگو","True / False"],
      ["filter()","فیلتر کردن نام‌ها","filter(names, pattern)","names, pattern","نام‌های مطابق الگو را جدا می‌کند","list"],
      ["translate()","تبدیل الگو به regex","translate(pattern)","pattern","الگو را به regex تبدیل می‌کند","str"]
    ]
  },

  {
    id:"filecmp", name:"filecmp", icon:"≋", cat:"فایل",
    desc:"مقایسه فایل‌ها و پوشه‌ها",
    tools:[
      ["cmp()","مقایسه دو فایل","filecmp.cmp(f1, f2)","f1, f2","برابری محتوای دو فایل را بررسی می‌کند","True / False"],
      ["cmpfiles()","مقایسه مجموعه فایل‌ها","filecmp.cmpfiles(dir1, dir2, common)","dir1, dir2, common","فایل‌های مشترک را مقایسه می‌کند","گزارش"],
      ["dircmp()","مقایسه دو پوشه","filecmp.dircmp(a, b)","a, b","تفاوت ساختار دو پوشه را بررسی می‌کند","Dircmp"],
      ["samefile()","بررسی یک فایل بودن","filecmp.cmp(f1, f2)","f1, f2","مقایسه فایل‌ها","True / False"]
    ]
  },

  {
    id:"tempfile", name:"tempfile", icon:"▧", cat:"فایل",
    desc:"ساخت فایل‌ها و پوشه‌های موقت",
    tools:[
      ["TemporaryFile()","ساخت فایل موقت","tempfile.TemporaryFile()","options اختیاری","فایل موقت می‌سازد","file object"],
      ["NamedTemporaryFile()","فایل موقت با نام","NamedTemporaryFile()","options","فایل موقت دارای نام ایجاد می‌کند","file object"],
      ["TemporaryDirectory()","پوشه موقت","TemporaryDirectory()","options","پوشه موقت می‌سازد","directory path"],
      ["gettempdir()","مسیر پوشه موقت","gettempdir()","—","محل پیش‌فرض فایل‌های موقت را می‌دهد","str"],
      ["mkstemp()","ساخت فایل موقت","tempfile.mkstemp()","options","فایل موقت سطح پایین می‌سازد","fd, path"],
      ["mkdtemp()","ساخت پوشه موقت","tempfile.mkdtemp()","options","پوشه موقت می‌سازد","path"]
    ]
  },

  {
    id:"stat", name:"stat", icon:"◫", cat:"فایل",
    desc:"اطلاعات و ویژگی‌های فایل مانند اندازه و نوع",
    tools:[
      ["stat()","گرفتن اطلاعات فایل","os.stat(path)","path","metadata فایل را می‌گیرد","stat_result"],
      ["S_ISREG()","بررسی فایل معمولی","stat.S_ISREG(mode)","mode","نوع فایل را بررسی می‌کند","True / False"],
      ["S_ISDIR()","بررسی پوشه","stat.S_ISDIR(mode)","mode","تشخیص می‌دهد مسیر پوشه است","True / False"],
      ["S_ISLINK()","بررسی symbolic link","stat.S_ISLNK(mode)","mode","بررسی لینک نمادین","True / False"],
      ["ST_SIZE","اندازه فایل","stat.ST_SIZE","—","اندازه فایل را مشخص می‌کند","int"],
      ["ST_MTIME","زمان تغییر","stat.ST_MTIME","—","زمان آخرین تغییر را نشان می‌دهد","timestamp"]
    ]
  },

  {
    id:"io", name:"io", icon:"↯", cat:"استاندارد",
    desc:"کار با جریان‌های داده و خواندن و نوشتن در حافظه",
    tools:[
      ["StringIO()","جریان متنی در حافظه","io.StringIO(initial_value='')","متن اولیه اختیاری","مثل فایل متنی در RAM","stream"],
      ["BytesIO()","جریان بایتی در حافظه","io.BytesIO(initial_bytes=b'')","bytes اختیاری","داده باینری را در RAM نگه می‌دارد","stream"],
      ["read()","خواندن جریان","stream.read(size=-1)","size اختیاری","داده را می‌خواند","str / bytes"],
      ["write()","نوشتن در جریان","stream.write(data)","data","داده را می‌نویسد","int"],
      ["seek()","تغییر موقعیت","stream.seek(offset)","offset","مکان خواندن/نوشتن را تغییر می‌دهد","int"],
      ["tell()","موقعیت فعلی","stream.tell()","—","موقعیت فعلی را می‌دهد","int"],
      ["getvalue()","دریافت محتوای RAM","stream.getvalue()","—","کل داده ذخیره‌شده را می‌دهد","str / bytes"]
    ]
  },

  {
    id:"mimetypes", name:"mimetypes", icon:"⊙", cat:"فایل",
    desc:"تشخیص نوع MIME فایل از روی پسوند",
    tools:[
      ["guess_type()","تشخیص نوع فایل","mimetypes.guess_type(url)","نام فایل/URL","نوع MIME احتمالی را حدس می‌زند","tuple"],
      ["guess_extension()","حدس پسوند","mimetypes.guess_extension(type)","MIME type","پسوند مناسب MIME را برمی‌گرداند","str"],
      ["init()","راه‌اندازی MIME types","mimetypes.init()","files اختیاری","جدول MIME را آماده می‌کند","بدون خروجی"],
      ["types_map","دسترسی به جدول MIME","mimetypes.types_map","—","جدول پسوند و MIME را می‌دهد","dict"]
    ]
  },

  {
    id:"tarfile", name:"tarfile", icon:"▱", cat:"فایل",
    desc:"ساخت و استخراج آرشیوهای tar",
    tools:[
      ["open()","باز کردن/ساخت آرشیو","tarfile.open(name, mode)","name, mode","آرشیو tar را باز یا ایجاد می‌کند","TarFile"],
      ["add()","افزودن فایل","tar.add(name)","name","فایل یا پوشه را وارد آرشیو می‌کند","بدون خروجی"],
      ["extractall()","استخراج آرشیو","tar.extractall(path)","path","محتویات آرشیو را استخراج می‌کند","فایل‌ها"],
      ["getnames()","گرفتن نام‌ها","tar.getnames()","—","نام فایل‌های آرشیو را می‌دهد","list"],
      ["getmembers()","گرفتن اعضا","tar.getmembers()","—","اطلاعات اعضای آرشیو را می‌دهد","list"],
      ["close()","بستن آرشیو","tar.close()","—","آرشیو را می‌بندد","بدون خروجی"]
    ]
  },

  {
    id:"gzip / bz2 / lzma", name:"gzip / bz2 / lzma", icon:"≋", cat:"فشرده‌سازی",
    desc:"فشرده‌سازی و استخراج با فرمت‌های مختلف",
    tools:[
      ["gzip.open()","خواندن/نوشتن gzip","gzip.open(filename, mode)","filename, mode","فایل gzip را باز می‌کند","file object"],
      ["bz2.open()","کار با BZ2","bz2.open(filename, mode)","filename, mode","فایل bzip2 را باز می‌کند","file object"],
      ["lzma.open()","کار با LZMA/XZ","lzma.open(filename, mode)","filename, mode","فایل xz/lzma را باز می‌کند","file object"],
      ["gzip.compress()","فشرده‌سازی داده","gzip.compress(data)","bytes","داده را gzip می‌کند","bytes"],
      ["gzip.decompress()","استخراج gzip","gzip.decompress(data)","bytes","داده gzip را باز می‌کند","bytes"]
    ]
  },

  {
    id:"requests", name:"requests", icon:"↯", cat:"وب",
    desc:"ارسال درخواست HTTP و ارتباط با APIها",
    tools:[
      ["get()","ارسال GET","requests.get(url, params=None)","url, params و options","داده را از URL دریافت می‌کند","Response"],
      ["post()","ارسال POST","requests.post(url, data=None, json=None)","url + data/json","داده را به سرور می‌فرستد","Response"],
      ["put()","ارسال PUT","requests.put(url, data=None)","url + data","داده را به‌روزرسانی می‌کند","Response"],
      ["delete()","ارسال DELETE","requests.delete(url)","url","درخواست حذف می‌فرستد","Response"],
      ["status_code","کد وضعیت پاسخ","response.status_code","—","کد HTTP پاسخ را می‌خواند","int"],
      ["json()","خواندن JSON","response.json()","—","JSON را به Python تبدیل می‌کند","dict/list"],
      ["text","متن پاسخ","response.text","—","متن پاسخ HTTP را می‌دهد","str"],
      ["headers","هدرهای پاسخ","response.headers","—","هدرهای HTTP را می‌دهد","dict"],
      ["raise_for_status()","بررسی خطای HTTP","response.raise_for_status()","—","در صورت خطا exception ایجاد می‌کند","بدون خروجی"]
    ]
  },

  {
    id:"argparse", name:"argparse", icon:"›_", cat:"استاندارد",
    desc:"ساخت ابزارهای خط فرمان و دریافت آرگومان‌ها",
    tools:[
      ["ArgumentParser()","ساخت parser","argparse.ArgumentParser()","description و options","مدیریت آرگومان‌ها را می‌سازد","ArgumentParser"],
      ["add_argument()","تعریف آرگومان","parser.add_argument(name, ...)","نام + options","گزینه خط فرمان اضافه می‌کند","Action"],
      ["parse_args()","خواندن آرگومان‌ها","parser.parse_args()","—","ورودی خط فرمان را پردازش می‌کند","Namespace"],
      ["add_subparsers()","ساخت زیر‌دستور","parser.add_subparsers()","options","چند فرمان فرعی می‌سازد","Subparsers"],
      ["set_defaults()","تنظیم مقدار پیش‌فرض","parser.set_defaults(**kwargs)","kwargs","مقدارهای پیش‌فرض تنظیم می‌کند","بدون خروجی"]
    ]
  },

  {
    id:"xml.etree.ElementTree", name:"ElementTree", icon:"◇", cat:"داده",
    desc:"خواندن، ساخت و پردازش XML",
    tools:[
      ["parse()","خواندن XML از فایل","ET.parse(source)","source","فایل XML را parse می‌کند","ElementTree"],
      ["fromstring()","خواندن XML از متن","ET.fromstring(text)","text","رشته XML را به درخت تبدیل می‌کند","Element"],
      ["find()","پیدا کردن عنصر","root.find(match)","match","اولین عنصر مطابق را پیدا می‌کند","Element"],
      ["findall()","پیدا کردن همه عناصر","root.findall(match)","match","همه عناصر مطابق را پیدا می‌کند","list"],
      ["Element()","ساخت عنصر","ET.Element(tag)","tag","عنصر XML می‌سازد","Element"],
      ["SubElement()","ساخت زیرعنصر","ET.SubElement(parent, tag)","parent, tag","عنصر فرزند می‌سازد","Element"],
      ["tostring()","تبدیل XML به متن","ET.tostring(element)","element","درخت را به bytes تبدیل می‌کند","bytes"]
    ]
  },

  {
    id:"configparser", name:"configparser", icon:"⚙", cat:"تنظیمات",
    desc:"خواندن و مدیریت فایل‌های تنظیمات INI",
    tools:[
      ["ConfigParser()","ساخت parser تنظیمات","configparser.ConfigParser()","—","parser برای INI می‌سازد","ConfigParser"],
      ["read()","خواندن تنظیمات","config.read(filename)","filename","فایل INI را می‌خواند","list"],
      ["get()","گرفتن مقدار","config.get(section, option)","section, option","مقدار گزینه را می‌خواند","str"],
      ["set()","تنظیم مقدار","config.set(section, option, value)","section, option, value","مقدار گزینه را تغییر می‌دهد","بدون خروجی"],
      ["sections()","گرفتن بخش‌ها","config.sections()","—","نام بخش‌ها را می‌دهد","list"],
      ["has_section()","بررسی بخش","config.has_section(section)","section","وجود یک section را بررسی می‌کند","bool"],
      ["has_option()","بررسی گزینه","config.has_option(section, option)","section, option","وجود گزینه را بررسی می‌کند","bool"]
    ]
  },

  {
    id:"time", name:"time", icon:"◷", cat:"زمان",
    desc:"زمان، تأخیر و اندازه‌گیری مدت اجرای کد",
    tools:[
      ["time()","زمان فعلی Unix","time.time()","—","زمان فعلی را به ثانیه می‌دهد","float"],
      ["sleep()","ایجاد تأخیر","time.sleep(seconds)","seconds","اجرای برنامه را متوقف می‌کند","بدون خروجی"],
      ["perf_counter()","اندازه‌گیری دقیق زمان","time.perf_counter()","—","برای benchmark مناسب است","float"],
      ["monotonic()","زمان یکنواخت","time.monotonic()","—","زمان یکنواخت برای اندازه‌گیری فاصله زمانی","float"],
      ["ctime()","تبدیل timestamp","time.ctime(seconds)","seconds","زمان را به متن تبدیل می‌کند","str"],
      ["strftime()","قالب‌بندی زمان","time.strftime(format)","format","زمان را با قالب دلخواه نمایش می‌دهد","str"]
    ]
  },

  {
    id:"sys / platform", name:"sys / platform", icon:"⌘", cat:"سیستم",
    desc:"اطلاعات Python و سیستم‌عامل",
    tools:[
      ["sys.version","نسخه Python","sys.version","—","اطلاعات نسخه Python را می‌دهد","str"],
      ["sys.argv","آرگومان‌های اجرا","sys.argv","—","لیست آرگومان‌های خط فرمان","list"],
      ["sys.executable","مسیر Python","sys.executable","—","مسیر interpreter را می‌دهد","str"],
      ["sys.platform","شناسه سیستم","sys.platform","—","شناسه سیستم‌عامل را می‌دهد","str"],
      ["platform.system()","نام سیستم‌عامل","platform.system()","—","نام OS را برمی‌گرداند","str"],
      ["platform.python_version()","نسخه Python","platform.python_version()","—","نسخه Python را می‌دهد","str"],
      ["platform.machine()","معماری سیستم","platform.machine()","—","معماری CPU/OS را می‌دهد","str"],
      ["platform.processor()","نام پردازنده","platform.processor()","—","اطلاعات processor را می‌دهد","str"]
    ]
  },

  {
    id:"threading / multiprocessing", name:"threading / multiprocessing", icon:"⚙", cat:"هم‌زمانی",
    desc:"اجرای هم‌زمان کارها در thread و process",
    tools:[
      ["Thread()","ساخت thread","threading.Thread(target=fn)","target + args","thread جدید می‌سازد","Thread"],
      ["start()","شروع thread","thread.start()","—","اجرای thread را آغاز می‌کند","بدون خروجی"],
      ["join()","انتظار برای پایان","thread.join()","timeout اختیاری","منتظر پایان thread می‌ماند","بدون خروجی"],
      ["is_alive()","بررسی فعال بودن","thread.is_alive()","—","فعال بودن thread را بررسی می‌کند","bool"],
      ["Process()","ساخت process","multiprocessing.Process(target=fn)","target + args","process جدا ایجاد می‌کند","Process"],
      ["Queue()","صف ارتباطی","multiprocessing.Queue()","—","صف برای ارتباط processها می‌سازد","Queue"],
      ["current_thread()","thread فعلی","threading.current_thread()","—","thread فعلی را برمی‌گرداند","Thread"]
    ]
  },

  {
    id:"sqlite3", name:"sqlite3", icon:"▣", cat:"داده",
    desc:"کار با SQLite بدون نیاز به سرور",
    tools:[
      ["connect()","اتصال به دیتابیس","sqlite3.connect(database)","database","اتصال SQLite ایجاد می‌کند","Connection"],
      ["cursor()","ساخت cursor","connection.cursor()","—","برای اجرای SQL استفاده می‌شود","Cursor"],
      ["execute()","اجرای SQL","cursor.execute(sql, params)","SQL + params","دستور SQL اجرا می‌کند","Cursor"],
      ["executemany()","اجرای چندباره SQL","cursor.executemany(sql, seq)","SQL + sequence","دستور را برای چند داده اجرا می‌کند","Cursor"],
      ["fetchone()","گرفتن یک نتیجه","cursor.fetchone()","—","یک ردیف نتیجه را می‌گیرد","tuple"],
      ["fetchall()","گرفتن همه نتایج","cursor.fetchall()","—","تمام ردیف‌ها را می‌گیرد","list"],
      ["commit()","ثبت تغییرات","connection.commit()","—","تغییرات را ذخیره می‌کند","بدون خروجی"],
      ["rollback()","برگرداندن تغییرات","connection.rollback()","—","تغییرات ثبت‌نشده را برمی‌گرداند","بدون خروجی"],
      ["close()","بستن اتصال","connection.close()","—","اتصال را می‌بندد","بدون خروجی"]
    ]
  },

  {
    id:"PDF tools", name:"PDF tools", icon:"▤", cat:"اسناد",
    desc:"خواندن، ویرایش، تبدیل و پردازش PDF",
    tools:[
      ["PdfReader","خواندن PDF","PdfReader(filename)","filename","PDF را باز می‌کند","Reader"],
      ["PdfWriter","ساخت/ویرایش PDF","PdfWriter()","—","برای ایجاد خروجی PDF استفاده می‌شود","Writer"],
      ["fitz.open()","باز کردن PDF با PyMuPDF","fitz.open(filename)","filename","PDF را برای پردازش باز می‌کند","Document"],
      ["convert_from_path()","تبدیل PDF به تصویر","convert_from_path(pdf_path)","path + options","صفحات PDF را به تصویر تبدیل می‌کند","images"],
      ["extract_text()","استخراج متن PDF","page.extract_text()","—","متن صفحه را استخراج می‌کند","str"],
      ["merge_page()","ادغام صفحات","page.merge_page(other)","other page","دو صفحه را روی هم قرار می‌دهد","Page"]
    ]
  },

  {
    id:"python-docx", name:"python-docx", icon:"W", cat:"اسناد",
    desc:"ساخت و ویرایش فایل‌های Word",
    tools:[
      ["Document()","ساخت Word","Document()","—","سند Word جدید می‌سازد","Document"],
      ["add_paragraph()","افزودن پاراگراف","document.add_paragraph(text)","text اختیاری","پاراگراف اضافه می‌کند","Paragraph"],
      ["add_heading()","افزودن عنوان","document.add_heading(text, level)","text, level","عنوان اضافه می‌کند","Paragraph"],
      ["add_table()","ساخت جدول","document.add_table(rows, cols)","rows, cols","جدول ایجاد می‌کند","Table"],
      ["add_page_break()","شکستن صفحه","document.add_page_break()","—","صفحه جدید ایجاد می‌کند","Paragraph"],
      ["save()","ذخیره Word","document.save(path)","path","سند را ذخیره می‌کند","docx"],
      ["add_picture()","افزودن تصویر","document.add_picture(path)","path","تصویر به Word اضافه می‌کند","InlineShape"]
    ]
  },

  {
    id:"python-pptx", name:"python-pptx", icon:"P", cat:"اسناد",
    desc:"ساخت و ویرایش PowerPoint",
    tools:[
      ["Presentation()","ساخت ارائه","Presentation()","template اختیاری","ارائه PowerPoint می‌سازد","Presentation"],
      ["add_slide()","افزودن اسلاید","prs.slides.add_slide(layout)","layout","یک اسلاید اضافه می‌کند","Slide"],
      ["add_textbox()","افزودن کادر متن","slide.shapes.add_textbox(...)","مختصات + اندازه","کادر متنی ایجاد می‌کند","Shape"],
      ["add_picture()","افزودن تصویر","slide.shapes.add_picture(path, ...)","path + مختصات","تصویر اضافه می‌کند","Picture"],
      ["slide_layouts","قالب‌های اسلاید","prs.slide_layouts","—","قالب‌های موجود را می‌دهد","Layouts"],
      ["save()","ذخیره PowerPoint","prs.save(path)","path","فایل pptx را ذخیره می‌کند","pptx"]
    ]
  },

  {
    id:"watchfiles", name:"watchfiles", icon:"◉", cat:"فایل",
    desc:"راه ساده برای شناسایی تغییرات فایل‌ها و پوشه‌ها",
    tools:[
      ["watch()","نظارت بر تغییرات","watch(path)","path + options","تغییرات فایل‌ها را دنبال می‌کند","changes"],
      ["Change.added","فایل ایجاد شده","Change.added","—","نوع تغییر ایجاد فایل","enum"],
      ["Change.modified","فایل تغییر کرده","Change.modified","—","نوع تغییر ویرایش فایل","enum"],
      ["Change.deleted","فایل حذف شده","Change.deleted","—","نوع تغییر حذف فایل","enum"]
    ]
  },

  {
    id:"APScheduler", name:"APScheduler", icon:"◷", cat:"زمان",
    desc:"زمان‌بندی پیشرفته‌ی کارهای خودکار",
    tools:[
      ["BackgroundScheduler()","ساخت scheduler","BackgroundScheduler()","options","زمان‌بند پس‌زمینه می‌سازد","Scheduler"],
      ["add_job()","افزودن کار","scheduler.add_job(func, trigger, ...)","تابع + trigger + options","یک job را زمان‌بندی می‌کند","Job"],
      ["start()","شروع scheduler","scheduler.start()","—","زمان‌بند را فعال می‌کند","بدون خروجی"],
      ["pause()","توقف موقت","scheduler.pause()","—","اجرای jobها را موقتاً متوقف می‌کند","بدون خروجی"],
      ["resume()","ادامه scheduler","scheduler.resume()","—","scheduler را ادامه می‌دهد","بدون خروجی"],
      ["shutdown()","خاموش کردن","scheduler.shutdown()","wait=True","scheduler را متوقف می‌کند","بدون خروجی"],
      ["get_jobs()","لیست jobها","scheduler.get_jobs()","—","jobهای فعال را می‌دهد","list"]
    ]
  },

  {
    id:"httpx", name:"httpx", icon:"↯", cat:"وب",
    desc:"درخواست HTTP مدرن به شکل همگام و غیرهمگام",
    tools:[
      ["get()","GET همگام","httpx.get(url)","url + options","درخواست GET می‌فرستد","Response"],
      ["post()","POST همگام","httpx.post(url)","url + options","درخواست POST می‌فرستد","Response"],
      ["Client()","کلاینت HTTP","httpx.Client()","options","اتصالات مشترک را مدیریت می‌کند","Client"],
      ["AsyncClient()","کلاینت async","httpx.AsyncClient()","options","درخواست asynchronous را مدیریت می‌کند","AsyncClient"],
      ["request()","ارسال درخواست عمومی","client.request(method, url)","method, url","درخواست HTTP عمومی می‌فرستد","Response"],
      ["aclose()","بستن کلاینت async","await client.aclose()","—","منابع کلاینت را آزاد می‌کند","بدون خروجی"],
      ["status_code","کد وضعیت","response.status_code","—","کد HTTP را می‌خواند","int"]
    ]
  },

  {
    id:"filelock", name:"filelock", icon:"🔒", cat:"فایل",
    desc:"جلوگیری از دسترسی هم‌زمان چند برنامه به یک فایل",
    tools:[
      ["FileLock()","ساخت قفل فایل","FileLock(lock_file)","مسیر فایل قفل","قفل فایل ایجاد می‌کند","FileLock"],
      ["acquire()","گرفتن قفل","lock.acquire(timeout=-1)","timeout اختیاری","تا گرفتن قفل صبر می‌کند","Lock"],
      ["release()","آزاد کردن قفل","lock.release()","—","قفل را آزاد می‌کند","بدون خروجی"],
      ["is_locked","بررسی قفل","lock.is_locked","—","بررسی می‌کند قفل فعال است","bool"],
      ["is_single_instance","قفل تک‌نمونه","lock.is_single_instance","—","وضعیت تک‌نمونه را بررسی می‌کند","bool"]
    ]
  }
];


/* =========================================================
   STATE
   ========================================================= */

const state = {
  lib:"os",
  category:"همه",
  chain:[]
};

const $ = id => document.getElementById(id);

const allTools = () =>
  LIBS.reduce((n,l) => n + l.tools.length, 0);


/* =========================================================
   VIRTUAL FILE SYSTEM
   ========================================================= */

const INITIAL_FILES = [
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
  },
  {
    type:"file",
    name:"students.csv",
    size:"12 KB",
    kind:"csv"
  },
  {
    type:"file",
    name:"data.xlsx",
    size:"31 KB",
    kind:"excel"
  },
  {
    type:"file",
    name:"notes.txt",
    size:"4 KB",
    kind:"text",
    content:"Hello Python!\nاین یک فایل متنی نمایشی است."
  }
];

const VFS = {
  root:{
    type:"folder",
    name:"PythonLab",
    children:JSON.parse(JSON.stringify(INITIAL_FILES))
  }
};

let selectedPath = null;
let currentExplorerPath = "";
let liveLog = [];


/* =========================================================
   INIT
   ========================================================= */

function init(){

  if($("libraryStat"))
    $("libraryStat").textContent = LIBS.length;

  if($("methodStat"))
    $("methodStat").textContent = allTools();

  if($("toolCount"))
    $("toolCount").textContent = LIBS.length;

  renderCategories();
  renderNav();
  renderCards();
  selectLib("os");

  if($("startBtn"))
    $("startBtn").onclick = () =>
      $("explore")?.scrollIntoView({behavior:"smooth"});

  if($("randomBtn"))
    $("randomBtn").onclick = () =>
      selectLib(
        LIBS[Math.floor(Math.random()*LIBS.length)].id
      );

  if($("clearBuilder"))
    $("clearBuilder").onclick = () => {
      state.chain = [];
      renderChain();
    };

  if($("runChain"))
    $("runChain").onclick = runChain;

  if($("copyCode"))
    $("copyCode").onclick = copyCode;

  if($("modalClose"))
    $("modalClose").onclick = closeModal;

  if($("modalBackdrop"))
    $("modalBackdrop").onclick = e => {
      if(e.target.id === "modalBackdrop")
        closeModal();
    };

  if($("themeBtn"))
    $("themeBtn").onclick = () =>
      document.body.classList.toggle("light");

  if($("presentBtn"))
    $("presentBtn").onclick = () => {

      document.body.classList.toggle("presentation");

      toast(
        document.body.classList.contains("presentation")
          ? "حالت ارائه فعال شد"
          : "حالت عادی فعال شد"
      );
    };

  if($("homeBtn"))
    $("homeBtn").onclick = () =>
      window.scrollTo({
        top:0,
        behavior:"smooth"
      });

  if($("searchInput"))
    $("searchInput").oninput = renderNav;

  renderFileExplorer();
  renderLiveLog("محیط نمایشی آماده است.");
}


/* =========================================================
   LIBRARY NAVIGATION
   ========================================================= */

function renderCategories(){

  const cats = [
    "همه",
    ...new Set(LIBS.map(x => x.cat))
  ];

  const row = $("categoryRow");

  if(!row)
    return;

  row.innerHTML = cats.map(c =>
    `<button class="cat ${c===state.category?"active":""}"
      data-cat="${escapeHtml(c)}">
      ${escapeHtml(c)}
    </button>`
  ).join("");

  document.querySelectorAll(".cat").forEach(b => {

    b.onclick = () => {

      state.category = b.dataset.cat;

      renderCategories();
      renderNav();
      renderCards();
    };
  });
}


function filteredLibs(){

  const q =
    ($("searchInput")?.value || "")
      .trim()
      .toLowerCase();

  return LIBS.filter(l => {

    const catOk =
      state.category === "همه" ||
      l.cat === state.category;

    const text = (
      l.name + " " +
      l.desc + " " +
      l.tools.map(t => t.join(" ")).join(" ")
    ).toLowerCase();

    return catOk && (!q || text.includes(q));
  });
}


function renderNav(){

  const libs = filteredLibs();
  const nav = $("libraryNav");

  if(!nav)
    return;

  nav.innerHTML =
    libs.map(l =>
      `<div class="nav-item ${l.id===state.lib?"active":""}"
        data-id="${escapeHtml(l.id)}">

        <span class="nav-icon">
          ${l.icon}
        </span>

        <span>
          ${escapeHtml(l.name)}
        </span>

      </div>`
    ).join("") ||
    `<div class="nav-group-title">
      موردی پیدا نشد.
    </div>`;

  document.querySelectorAll(".nav-item").forEach(x =>
    x.onclick = () =>
      selectLib(x.dataset.id)
  );
}


function renderCards(){

  const libs = filteredLibs();
  const grid = $("libraryGrid");

  if(!grid)
    return;

  grid.innerHTML = libs.map(l =>
    `<article
      class="lib-card"
      data-id="${escapeHtml(l.id)}">

      <div class="lib-icon">
        ${l.icon}
      </div>

      <h3>
        ${escapeHtml(l.name)}
      </h3>

      <p>
        ${escapeHtml(l.desc)}
      </p>

      <span class="lib-meta">
        ${l.tools.length} ابزار
      </span>

    </article>`
  ).join("");

  document.querySelectorAll(".lib-card").forEach(x =>
    x.onclick = () =>
      selectLib(x.dataset.id)
  );
}


function selectLib(id){

  state.lib = id;

  const l = LIBS.find(x => x.id === id);

  if(!l)
    return;

  if($("labTitle"))
    $("labTitle").textContent =
      l.name + " — آزمایشگاه";

  if($("toolList"))
    $("toolList").innerHTML =
      l.tools.map((t,i) =>
        `<div
          class="tool-card"
          data-i="${i}">

          <div>
            <div class="tool-name">
              ${escapeHtml(t[0])}
            </div>

            <div class="tool-desc">
              ${escapeHtml(t[1])}
            </div>
          </div>

          <button
            class="help-btn"
            data-help="${i}">
            ?
          </button>

        </div>`
      ).join("");

  document.querySelectorAll(".tool-card").forEach(c => {

    c.onclick = e => {

      if(e.target.classList.contains("help-btn"))
        return;

      const tool =
        l.tools[Number(c.dataset.i)];

      addTool(tool,l);
    };
  });

  document.querySelectorAll(".help-btn").forEach(b => {

    b.onclick = e => {

      e.stopPropagation();

      openModal(
        l.tools[Number(b.dataset.help)],
        l
      );
    };
  });

  renderNav();
  renderCards();

  $("labSection")?.scrollIntoView({
    behavior:"smooth",
    block:"start"
  });
}


/* =========================================================
   ARGUMENT HANDLING
   ========================================================= */

function parseSignatureArgs(signature){

  const m =
    signature.match(/\((.*)\)/);

  if(!m)
    return [];

  const body =
    m[1].trim();

  if(
    !body ||
    body==="..." ||
    body==="—"
  )
    return [];

  return body
    .split(",")
    .map(x => x.trim())
    .filter(Boolean)
    .map(x =>
      x
        .replace(/\*\*/g,"")
        .replace(/\*/g,"")
        .replace(/\s*=.*$/,"")
    );
}


function defaultValueForArg(arg){

  const selected =
    selectedPath || "";

  if(
    [
      "path",
      "filename",
      "source",
      "url",
      "name",
      "src",
      "dst",
      "f1",
      "f2",
      "pdf_path",
      "database",
      "lock_file"
    ].includes(arg)
  ){
    return selected;
  }

  if(arg === "pattern")
    return "*.txt";

  if(arg === "text")
    return "Hello Python";

  if(arg === "seconds")
    return "2";

  if(arg === "n")
    return "5";

  if(arg === "row")
    return "1";

  if(arg === "column")
    return "1";

  if(arg === "type")
    return "application/pdf";

  if(arg === "data")
    return "Hello Python";

  if(arg === "method")
    return "GET";

  if(arg === "interval")
    return "10";

  if(arg === "tag")
    return "demo";

  if(arg === "encoding")
    return "utf-8";

  if(arg === "target")
    return "new_name.txt";

  if(arg === "title")
    return "NewSheet";

  if(arg === "level")
    return "1";

  if(arg === "cmd")
    return "python";

  return "";
}


function isOptionalArg(t,arg,index){

  const signature =
    t[2] || "";

  const info =
    (t[3] || "") + " " + signature;

  /*
    قبلاً فقط index > 0 بررسی می‌شد.
    حالا اگر خود آرگومان اختیاری باشد،
    حتی آرگومان اول هم اختیاری محسوب می‌شود.
  */

  const argOptional =
    /اختیاری/i.test(
      (t[3] || "")
    ) &&
    new RegExp(
      `\\b${arg}\\b`
    ).test(t[3] || "");

  const signatureOptional =
    new RegExp(
      `${arg}\\s*=`
    ).test(signature) ||
    new RegExp(
      `${arg}\\s*=\\s*None`
    ).test(signature);

  return (
    argOptional ||
    signatureOptional ||
    (
      /optional|اختیاری|None/i.test(info) &&
      index > 0
    )
  );
}


function askToolArgs(t){

  const args =
    parseSignatureArgs(t[2]);

  if(!args.length)
    return {};

  const values = {};

  for(let i=0;i<args.length;i++){

    const arg = args[i];

    if(
      [
        "layout",
        "options",
        "kwargs",
        "fn",
        "iterable",
        "handler",
        "event",
        "worksheet",
        "other",
        "element",
        "root",
        "job",
        "trigger"
      ].includes(arg)
    ){

      values[arg] = arg;
      continue;
    }

    const optional =
      isOptionalArg(
        t,
        arg,
        i
      );

    const def =
      defaultValueForArg(arg);

    const v =
      prompt(
        `مقدار ${arg} را وارد کن${optional?" (اختیاری)":""}:`,
        def
      );

    if(v === null)
      return null;

    if(v !== "" || !optional)
      values[arg] = v;
  }

  return values;
}


/* =========================================================
   SIGNATURE BUILDER
   ========================================================= */

function fillSignature(signature,args){

  return signature

    .replace(
      /([A-Za-z_][\w]*)\s*=\s*[^,)]+/g,
      "$1"
    )

    .replace(
      /([A-Za-z_][\w]*)/g,
      m =>
        Object.prototype.hasOwnProperty.call(args,m)
          ? JSON.stringify(args[m])
          : m
    );
}


/* =========================================================
   ADD TOOL
   ========================================================= */

function addTool(t,l){

  const args =
    askToolArgs(t);

  if(args === null)
    return;

  const customized = [
    t[0],
    t[1],
    fillSignature(
      t[2],
      args
    ),
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

  if(!statePreview(customized,l,args))
    preview(customized,l,args);
}


/* =========================================================
   CHAIN
   ========================================================= */

function renderChain(){

  const c = $("chain");

  if(!c)
    return;

  if(!state.chain.length){

    c.className = "chain empty";

    c.innerHTML = `
      <div class="empty-chain">

        <div class="drop-icon">
          ＋
        </div>

        <b>
          بلوک‌ها را اینجا جمع کن
        </b>

        <span>
          با کلیک روی هر ابزار، یک بلوک به کد اضافه می‌شود.
        </span>

      </div>
    `;

    generateCode();

    return;
  }

  c.className = "chain";

  c.innerHTML =
    state.chain.map((x,i) =>
      `<div class="chain-block">

        <span class="chain-index">
          ${String(i+1).padStart(2,"0")}
        </span>

        <code>
          ${escapeHtml(x.tool[2])}
        </code>

        <button
          class="remove-block"
          data-i="${i}">
          ×
        </button>

      </div>`
    ).join("");

  document.querySelectorAll(".remove-block").forEach(b =>
    b.onclick = () => {

      state.chain.splice(
        Number(b.dataset.i),
        1
      );

      renderChain();
    }
  );

  generateCode();
}


function importLine(lib){

  const map = {

    "os":
      "import os",

    "pathlib":
      "from pathlib import Path",

    "shutil":
      "import shutil",

    "concurrent.futures":
      "from concurrent.futures import ThreadPoolExecutor, ProcessPoolExecutor",

    "hashlib":
      "import hashlib",

    "openpyxl":
      "from openpyxl import Workbook, load_workbook",

    "pandas":
      "import pandas as pd",

    "watchdog":
      "from watchdog.observers import Observer",

    "schedule":
      "import schedule",

    "Send2Trash":
      "from send2trash import send2trash",

    "fnmatch":
      "from fnmatch import fnmatch, filter",

    "filecmp":
      "import filecmp",

    "tempfile":
      "import tempfile",

    "stat":
      "import stat",

    "io":
      "import io",

    "mimetypes":
      "import mimetypes",

    "tarfile":
      "import tarfile",

    "gzip / bz2 / lzma":
      "import gzip\nimport bz2\nimport lzma",

    "requests":
      "import requests",

    "argparse":
      "import argparse",

    "xml.etree.ElementTree":
      "import xml.etree.ElementTree as ET",

    "configparser":
      "import configparser",

    "time":
      "import time",

    "sys / platform":
      "import sys\nimport platform",

    "threading / multiprocessing":
      "import threading\nimport multiprocessing",

    "sqlite3":
      "import sqlite3",

    "PDF tools":
      "# PDF library imports depend on the selected tool",

    "python-docx":
      "from docx import Document",

    "python-pptx":
      "from pptx import Presentation",

    "watchfiles":
      "from watchfiles import watch",

    "APScheduler":
      "from apscheduler.schedulers.background import BackgroundScheduler",

    "httpx":
      "import httpx",

    "filelock":
      "from filelock import FileLock"
  };

  return map[lib] ||
    `# import ${lib}`;
}


function generateCode(){

  const box =
    $("generatedCode");

  if(!box)
    return;

  if(!state.chain.length){

    box.textContent =
      "# برای ساخت کد، یک ابزار انتخاب کنید...";

    return;
  }

  const imports = [];

  state.chain.forEach(x => {

    const line =
      importLine(x.lib);

    if(!imports.includes(line))
      imports.push(line);
  });

  const lines = [
    ...imports,
    "",
    ...state.chain.map(
      x => x.tool[2]
    )
  ];

  box.textContent =
    lines.join("\n");
}


/* =========================================================
   REAL CHAIN EXECUTION
   ========================================================= */

function runChain(){

  if(!state.chain.length){

    toast(
      "اول چند بلوک به زنجیره اضافه کن."
    );

    return;
  }

  let success = 0;
  let failed = 0;

  for(const item of state.chain){

    const handled =
      statePreview(
        item.tool,
        {name:item.lib},
        item.args || {}
      );

    if(handled)
      success++;
    else
      failed++;
  }

  $("resultBody").innerHTML = `
    <div class="live-success">
      ✓ زنجیره اجرا شد
    </div>

    <div class="state-count">
      ${success} مرحله شبیه‌سازی شد
      ${
        failed
          ? ` و ${failed} مرحله فقط پیش‌نمایش شد.`
          : "."
      }
    </div>

    <p>
      تغییرات واقعی محیط نمایشی
      در File Explorer قابل مشاهده است.
    </p>
  `;

  $("resultStatus").textContent =
    failed
      ? "SIMULATED ✓"
      : "EXECUTED ✓";

  renderFileExplorer();

  toast(
    failed
      ? "زنجیره اجرا شد؛ بعضی ابزارها فقط شبیه‌سازی شدند."
      : "زنجیره با موفقیت اجرا شد."
  );
}


/* =========================================================
   PREVIEW
   ========================================================= */

function preview(t,l,args={}){

  const n = t[0];
  let html = "";

  if(n === "getcwd()"){

    html = `
      مسیر فعلی:
      <br>

      <span class="preview-file">
        📁 <b>PythonLab</b>
      </span>
    `;
  }

  else if(n === "Path()"){

    const path =
      args.path || ".";

    html = `
      <div class="live-success">
        ◈ Path object ساخته شد
      </div>

      <p>
        <code dir="ltr">
          Path(${JSON.stringify(path)})
        </code>
      </p>

      <span style="color:#7e8aa5">
        نوع خروجی: pathlib.Path
      </span>
    `;
  }

  else if(n === "listdir()"){

    html = `
      <div class="preview-file">
        📄 students.csv
      </div>

      <div class="preview-file">
        📄 report.xlsx
      </div>

      <div class="preview-file">
        📁 data
      </div>

      <div class="preview-file">
        📁 output
      </div>
    `;
  }

  else if(n.includes("sha256")){

    html = `
      <div class="preview-progress">
        <i></i>
      </div>

      <p>
        داده‌ی <b>Hello Python</b>
        → SHA-256
      </p>
    `;
  }

  else if(n === "hexdigest()"){

    html = `
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
      "tail()",
      "sort_values()",
      "groupby()",
      "describe()"
    ].includes(n)
  ){

    html = `
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
      "save()",
      "create_sheet()",
      "cell()"
    ].includes(n)
  ){

    html = `
      📊 <b>students.xlsx</b>
      <br>

      <span style="color:#7e8aa5">
        Sheet1 → 3 rows → saved
      </span>
    `;
  }

  else if(
    n.includes("Observer") ||
    [
      "schedule()",
      "start()",
      "stop()",
      "on_created()",
      "on_deleted()",
      "on_modified()",
      "on_moved()"
    ].includes(n)
  ){

    html = `
      👁 ناظر فعال است
      <br>

      <span style="color:#31d5c8">
        event: modified → report.xlsx
      </span>
    `;
  }

  else if(n === "send2trash()"){

    html = `
      🗑 <b>old_file.txt</b>
      → Recycle Bin

      <br>

      <span style="color:#7e8aa5">
        فایل حذف دائمی نشده است.
      </span>
    `;
  }

  else if(
    ["fnmatch()","filter()"].includes(n)
  ){

    html = `
      <code dir="ltr">
        fnmatch("report.xlsx", "*.xlsx")
      </code>

      <br>

      نتیجه:
      <b style="color:#6ee7d8">
        True
      </b>
    `;
  }

  else if(n === "sleep()"){

    html = `
      ⏱ شبیه‌سازی تأخیر:
      <b>2 seconds</b>

      <br>

      <div class="preview-progress">
        <i style="width:35%"></i>
      </div>
    `;
  }

  else if(
    [
      "platform.system()",
      "platform.python_version()",
      "platform.machine()",
      "platform.processor()"
    ].includes(n)
  ){

    html = `
      سیستم:
      <b>
        ${
          n==="platform.system()"
            ? "Windows"
            : "Python / Windows"
        }
      </b>
    `;
  }

  else if(n === "status_code"){

    html = `
      HTTP Status:
      <b style="color:#6ee7d8">
        200 OK
      </b>
    `;
  }

  else if(
    ["guess_type()","guess_extension()"].includes(n)
  ){

    html = `
      <code dir="ltr">
        report.pdf → application/pdf
      </code>
    `;
  }

  else if(n === "disk_usage()"){

    html = `
      💾 Total: 512 GB
      &nbsp;
      Used: 287 GB
      &nbsp;
      Free: 225 GB
    `;
  }

  else if(
    [
      "TemporaryDirectory()",
      "TemporaryFile()",
      "NamedTemporaryFile()",
      "mkstemp()",
      "mkdtemp()"
    ].includes(n)
  ){

    html = `
      📁 <b>Temporary resource</b>

      <br>

      <span style="color:#7e8aa5">
        منبع موقت برای اجرای برنامه ساخته شد.
      </span>
    `;
  }

  else if(
    [
      "connect()",
      "cursor()",
      "execute()",
      "commit()",
      "fetchall()",
      "fetchone()"
    ].includes(n)
  ){

    html = `
      🗄 SQLite
      <br>
      <b>
        simulation successful
      </b>
    `;
  }

  else if(
    [
      "PdfReader",
      "PdfWriter",
      "fitz.open()",
      "convert_from_path()"
    ].includes(n)
  ){

    html = `
      📄 <b>PDF simulation</b>

      <br>

      <span style="color:#7e8aa5">
        فایل PDF برای نمایش ارائه شبیه‌سازی شد.
      </span>
    `;
  }

  else if(
    [
      "Document()",
      "add_paragraph()",
      "add_heading()",
      "add_table()",
      "add_page_break()",
      "add_picture()"
    ].includes(n)
  ){

    html = `
      📘 <b>Word document</b>

      <br>

      <span style="color:#7e8aa5">
        عملیات Word شبیه‌سازی شد.
      </span>
    `;
  }

  else if(
    [
      "Presentation()",
      "add_slide()",
      "add_textbox()",
      "add_picture()"
    ].includes(n)
  ){

    html = `
      📊 <b>PowerPoint</b>

      <br>

      <span style="color:#7e8aa5">
        عملیات PowerPoint شبیه‌سازی شد.
      </span>
    `;
  }

  else {

    html = `
      <div class="preview-file">
        ✓ ${escapeHtml(t[1])}
      </div>

      <br>

      <span style="color:#7e8aa5">
        این ابزار در محیط ارائه شبیه‌سازی شد.
      </span>
    `;
  }

  $("resultBody").innerHTML = html;
  $("resultStatus").textContent =
    "SIMULATED ✓";
}


/* =========================================================
   VIRTUAL FILE SYSTEM HELPERS
   ========================================================= */

/*
  همه‌ی مسیرهای VFS از ریشه PythonLab شروع می‌شوند.

  مثال:

  ""
  .
  report.docx
  Projects
  Projects/Python
  Projects/Python/test.py
*/

function normalizeVirtualPath(path){

  let p =
    String(path ?? "")
      .trim()
      .replace(/\\/g,"/");

  if(
    p === "" ||
    p === "."
  )
    return "";

  p =
    p.replace(/^\.\/+/,"")
     .replace(/\/+/g,"/");

  const parts = [];

  for(const part of p.split("/")){

    if(!part || part === ".")
      continue;

    if(part === ".."){

      if(parts.length)
        parts.pop();

      continue;
    }

    parts.push(part);
  }

  return parts.join("/");
}


function splitVirtualPath(path){

  const normalized =
    normalizeVirtualPath(path);

  if(!normalized)
    return [];

  return normalized.split("/");
}


function getNode(path){

  const normalized =
    normalizeVirtualPath(path);

  if(!normalized)
    return VFS.root;

  const parts =
    splitVirtualPath(normalized);

  let current =
    VFS.root;

  for(const part of parts){

    if(
      !current ||
      current.type !== "folder"
    )
      return null;

    current =
      current.children.find(
        x => x.name === part
      );

    if(!current)
      return null;
  }

  return current;
}


function getParentNode(path){

  const normalized =
    normalizeVirtualPath(path);

  const parts =
    splitVirtualPath(normalized);

  if(parts.length <= 1)
    return VFS.root;

  const parentPath =
    parts
      .slice(0,-1)
      .join("/");

  return getNode(parentPath);
}


function getNodeName(path){

  const parts =
    splitVirtualPath(path);

  return parts.length
    ? parts[parts.length-1]
    : VFS.root.name;
}


function getNodePath(path){

  return normalizeVirtualPath(path);
}


function findChild(name){

  return getNode(name);
}


function removeNode(path){

  const normalized =
    normalizeVirtualPath(path);

  if(!normalized)
    return false;

  const parent =
    getParentNode(normalized);

  if(!parent || !parent.children)
    return false;

  const name =
    getNodeName(normalized);

  const index =
    parent.children.findIndex(
      x => x.name === name
    );

  if(index < 0)
    return false;

  parent.children.splice(
    index,
    1
  );

  return true;
}


function insertNode(path,node){

  const normalized =
    normalizeVirtualPath(path);

  const parts =
    splitVirtualPath(normalized);

  if(!parts.length)
    return false;

  const name =
    parts.pop();

  const parentPath =
    parts.join("/");

  const parent =
    getNode(parentPath);

  if(
    !parent ||
    parent.type !== "folder"
  )
    return false;

  node.name = name;

  parent.children.push(node);

  return true;
}


function createFolderPath(path){

  const normalized =
    normalizeVirtualPath(path);

  if(!normalized)
    return VFS.root;

  const parts =
    splitVirtualPath(normalized);

  let current =
    VFS.root;

  for(const part of parts){

    let folder =
      current.children.find(
        x =>
          x.type === "folder" &&
          x.name === part
      );

    if(!folder){

      folder = {
        type:"folder",
        name:part,
        children:[]
      };

      current.children.push(folder);
    }

    current = folder;
  }

  return current;
}


function createVirtualFile(name){

  const lower =
    name.toLowerCase();

  let kind =
    "text";

  if(/\.(jpg|jpeg|png|gif|bmp)$/.test(lower))
    kind = "image";

  else if(/\.(mp4|avi|mkv|mov)$/.test(lower))
    kind = "video";

  else if(lower.endsWith(".docx"))
    kind = "word";

  else if(lower.endsWith(".pptx"))
    kind = "powerpoint";

  else if(lower.endsWith(".xlsx"))
    kind = "excel";

  else if(lower.endsWith(".csv"))
    kind = "csv";

  return {
    type:"file",
    name,
    size:"1 KB",
    kind,
    content:""
  };
}


function cloneNode(node){

  return JSON.parse(
    JSON.stringify(node)
  );
}


function buildDestinationPath(src,dst){

  const normalizedDst =
    normalizeVirtualPath(dst);

  if(!normalizedDst)
    return null;

  const destinationNode =
    getNode(normalizedDst);

  /*
    اگر مقصد یک پوشه موجود باشد،
    رفتار شبیه shutil است:
    فایل داخل آن پوشه قرار می‌گیرد.
  */

  if(
    destinationNode &&
    destinationNode.type === "folder"
  ){

    return (
      normalizedDst +
      "/" +
      getNodeName(src)
    );
  }

  return normalizedDst;
}


/* =========================================================
   FILE EXPLORER
   ========================================================= */

function renderFileExplorer(){

  const el =
    document.getElementById("liveExplorer");

  if(!el)
    return;

  const current =
    getNode(currentExplorerPath);

  /*
    اگر پوشه‌ای که در آن بودیم حذف شده باشد،
    به ریشه برمی‌گردیم.
  */

  if(
    !current ||
    current.type !== "folder"
  ){

    currentExplorerPath = "";

    return renderFileExplorer();
  }

  const a =
    current.children || [];

  const currentDisplay =
    currentExplorerPath
      ? `PythonLab / ${currentExplorerPath}`
      : "PythonLab /";

  el.innerHTML = `

    <div class="explorer-head">

      <div>

        <span class="eyebrow">
          VIRTUAL FILE EXPLORER
        </span>

        <b>
          ${escapeHtml(currentDisplay)}
        </b>

      </div>

      <button
        class="reset-files"
        type="button"
        id="resetFiles">
        ↻ بازنشانی
      </button>

    </div>


    <div class="explorer-toolbar">

      ${
        currentExplorerPath
          ? `
            <button
              type="button"
              class="file-back"
              id="fileBack">
              ← پوشه والد
            </button>
          `
          : ""
      }

      <span>
        📁
        ${a.filter(x => x.type==="folder").length}
        پوشه
      </span>

      <span>•</span>

      <span>
        📄
        ${a.filter(x => x.type==="file").length}
        فایل
      </span>

    </div>


    <div class="file-grid">

      ${
        a.map(x => {

          const itemPath =
            currentExplorerPath
              ? currentExplorerPath + "/" + x.name
              : x.name;

          return `
            <button
              type="button"
              class="file-item ${
                selectedPath === itemPath
                  ? "selected"
                  : ""
              }"
              data-file="${escapeHtml(itemPath)}"
              data-type="${x.type}">

              <span class="big-file-icon">
                ${iconFor(x)}
              </span>

              <span class="file-name">
                ${escapeHtml(x.name)}
              </span>

              <span class="file-meta">

                ${
                  x.type === "folder"
                    ? (x.children?.length || 0) + " مورد"
                    : x.size
                }

              </span>

            </button>
          `;
        }).join("")
      }

      ${
        a.length === 0
          ? `
            <div class="empty-files">
              این پوشه خالی است.
            </div>
          `
          : ""
      }

    </div>
  `;


  document
    .querySelectorAll(".file-item")
    .forEach(b => {

      b.onclick = () => {

        const path =
          b.dataset.file;

        const node =
          getNode(path);

        /*
          کلیک روی پوشه:
          وارد پوشه می‌شویم.
        */

        if(
          node &&
          node.type === "folder"
        ){

          currentExplorerPath =
            normalizeVirtualPath(path);

          selectedPath =
            currentExplorerPath;

          renderFileExplorer();

          renderLiveLog(
            `ورود به پوشه: ${path}`
          );

          return;
        }

        /*
          کلیک روی فایل:
          فایل انتخاب می‌شود.
        */

        selectedPath = path;

        renderFileExplorer();

        renderLiveLog(
          `انتخاب شد: ${path}`
        );
      };
    });


  const reset =
    document.getElementById("resetFiles");

  if(reset)
    reset.onclick =
      resetVirtualFS;


  const back =
    document.getElementById("fileBack");

  if(back){

    back.onclick = () => {

      const parts =
        splitVirtualPath(
          currentExplorerPath
        );

      parts.pop();

      currentExplorerPath =
        parts.join("/");

      selectedPath =
        currentExplorerPath || null;

      renderFileExplorer();

      renderLiveLog(
        currentExplorerPath
          ? `ورود به پوشه: ${currentExplorerPath}`
          : "بازگشت به ریشه"
      );
    };
  }
}


function iconFor(x){

  if(x.type === "folder")
    return "📁";

  if(x.kind === "image")
    return "🖼️";

  if(x.kind === "video")
    return "🎬";

  if(x.kind === "word")
    return "📘";

  if(x.kind === "powerpoint")
    return "📙";

  if(x.kind === "excel")
    return "📊";

  if(x.kind === "csv")
    return "▤";

  return "📄";
}


/* =========================================================
   LIVE LOG
   ========================================================= */

function renderLiveLog(msg){

  if(msg){

    liveLog.unshift({

      time:
        new Date().toLocaleTimeString(
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

  const e =
    document.getElementById("liveLog");

  if(!e)
    return;

  e.innerHTML =
    liveLog
      .slice(0,7)
      .map(x =>
        `<div class="log-line">

          <span>
            ${x.time}
          </span>

          <b>
            ${escapeHtml(x.msg)}
          </b>

        </div>`
      ).join("") ||

      `<div class="empty-log">
        هنوز دستوری اجرا نشده است.
      </div>`;
}


/* =========================================================
   RESET
   ========================================================= */

function resetVirtualFS(){

  VFS.root.children =
    JSON.parse(
      JSON.stringify(INITIAL_FILES)
    );

  selectedPath = null;
  currentExplorerPath = "";
  liveLog = [];

  renderFileExplorer();

  renderLiveLog(
    "محیط نمایشی به حالت اولیه برگشت."
  );

  toast(
    "محیط فایل‌ها ریست شد."
  );
}


/* =========================================================
   STATE PREVIEW
   ========================================================= */

function statePreview(t,l,args={}){

  const n = t[0];

  const val = (k,f="") =>
    Object.prototype.hasOwnProperty.call(
      args,
      k
    )
      ? String(args[k])
      : f;


  /* =====================================================
     OS
     ===================================================== */

  if(n === "getcwd()"){

    $("resultBody").innerHTML = `
      <div class="live-success">
        📁 PythonLab
      </div>

      <p>
        مسیر فعلی شبیه‌سازی:
        <code dir="ltr">
          PythonLab
        </code>
      </p>
    `;

    $("resultStatus").textContent =
      "READ STATE ✓";

    renderLiveLog(
      "os.getcwd()"
    );

    return true;
  }


  if(n === "listdir()"){

    const path =
      val(
        "path",
        currentExplorerPath || "."
      );

    const node =
      getNode(path);

    if(
      !node ||
      node.type !== "folder"
    ){

      $("resultBody").innerHTML = `
        <div class="live-error">
          ✕ مسیر «${escapeHtml(path)}»
          یک پوشه معتبر نیست.
        </div>
      `;

      $("resultStatus").textContent =
        "ERROR ✕";

      return true;
    }

    const children =
      node.children || [];

    $("resultBody").innerHTML = `
      <div class="state-list">

        ${
          children.length
            ? children.map(x =>
                `<span>
                  ${
                    x.type==="folder"
                      ? "📁 "
                      : "📄 "
                  }
                  ${escapeHtml(x.name)}
                </span>`
              ).join("")
            : "<span>پوشه خالی است.</span>"
        }

      </div>

      <p>
        مسیر:
        <code dir="ltr">
          ${escapeHtml(path || ".")}
        </code>
      </p>
    `;

    $("resultStatus").textContent =
      "READ STATE ✓";

    renderLiveLog(
      `os.listdir("${path || "."}")`
    );

    return true;
  }


  if(
    n === "mkdir()" ||
    n === "makedirs()"
  ){

    const name =
      val("path");

    if(!name){

      toast(
        "برای ساخت پوشه، path وارد کن."
      );

      return true;
    }

    const existing =
      getNode(name);

    if(existing){

      toast(
        `«${name}» از قبل وجود دارد.`
      );

      $("resultBody").innerHTML = `
        <div class="live-error">
          ⚠ مسیر «${escapeHtml(name)}»
          از قبل وجود دارد.
        </div>
      `;

      $("resultStatus").textContent =
        "ALREADY EXISTS";

      return true;
    }

    /*
      mkdir و makedirs در این شبیه‌ساز
      ساختار مسیر را به‌صورت قابل مشاهده ایجاد می‌کنند.
    */

    const folder =
      createFolderPath(name);

    if(!folder){

      toast(
        "ساخت پوشه انجام نشد."
      );

      return true;
    }

    currentExplorerPath =
      normalizeVirtualPath(name);

    selectedPath =
      currentExplorerPath;

    renderFileExplorer();

    renderLiveLog(
      `${n} → ${name} ساخته شد`
    );

    $("resultBody").innerHTML = `
      <div class="live-success">
        📁 ساختار «${escapeHtml(name)}»
        ساخته شد.
      </div>

      <p>
        <code dir="ltr">
          ${
            n==="mkdir()"
              ? `os.mkdir(${JSON.stringify(name)})`
              : `os.makedirs(${JSON.stringify(name)})`
          }
        </code>
      </p>

      <p>
        اکنون File Explorer داخل همین پوشه را نمایش می‌دهد.
      </p>
    `;

    $("resultStatus").textContent =
      "FOLDER CREATED ✓";

    return true;
  }


  if(
    n === "remove()" ||
    n === "unlink()"
  ){

    const target =
      val(
        "path",
        selectedPath || ""
      );

    const node =
      getNode(target);

    if(
      !node ||
      node.type !== "file"
    ){

      toast(
        `فایل «${target}» پیدا نشد.`
      );

      return true;
    }

    removeNode(target);

    if(
      selectedPath === target
    )
      selectedPath = null;

    renderFileExplorer();

    renderLiveLog(
      `${n} "${target}" → حذف شد`
    );

    $("resultBody").innerHTML = `
      <div class="live-success">
        ✓ «${escapeHtml(target)}»
        حذف شد
      </div>

      <p>
        <code dir="ltr">
          ${
            n==="remove()"
              ? `os.remove(${JSON.stringify(target)})`
              : `Path(${JSON.stringify(target)}).unlink()`
          }
        </code>
      </p>
    `;

    $("resultStatus").textContent =
      "STATE UPDATED ✓";

    return true;
  }


  if(
    n === "rename()" ||
    n === "replace()"
  ){

    const target =
      val(
        "src",
        selectedPath || ""
      );

    const dest =
      val("dst","");

    const x =
      getNode(target);

    if(!x){

      toast(
        `«${target}» پیدا نشد.`
      );

      return true;
    }

    if(!dest){

      toast(
        "مقصد را وارد کن."
      );

      return true;
    }

    const destination =
      normalizeVirtualPath(dest);

    const existing =
      getNode(destination);

    if(existing){

      if(n === "replace()"){
        removeNode(destination);
      }else{

        toast(
          "مقصد از قبل وجود دارد."
        );

        return true;
      }
    }

    const copy =
      cloneNode(x);

    removeNode(target);

    if(!insertNode(destination,copy)){

      toast(
        "مسیر مقصد معتبر نیست."
      );

      return true;
    }

    selectedPath =
      destination;

    renderFileExplorer();

    renderLiveLog(
      `${target} → ${destination}`
    );

    $("resultBody").innerHTML = `
      <div class="live-success">
        ✓ «${escapeHtml(target)}»
        به
        «${escapeHtml(destination)}»
        تغییر کرد
      </div>

      <p>
        <code dir="ltr">
          ${
            n==="rename()"
              ? `os.rename(${JSON.stringify(target)}, ${JSON.stringify(destination)})`
              : `os.replace(${JSON.stringify(target)}, ${JSON.stringify(destination)})`
          }
        </code>
      </p>
    `;

    $("resultStatus").textContent =
      "RENAMED ✓";

    return true;
  }


  if(
    ["isfile()","isdir()"].includes(n)
  ){

    const target =
      val(
        "path",
        selectedPath || ""
      );

    const x =
      getNode(target);

    const result =
      n === "isfile()"
        ? !!x && x.type === "file"
        : !!x && x.type === "folder";

    $("resultBody").innerHTML = `
      <code dir="ltr">
        ${n}("${escapeHtml(target)}")
      </code>

      <br>

      <b class="${result?"live-true":""}">
        ${result}
      </b>
    `;

    $("resultStatus").textContent =
      "READ STATE ✓";

    return true;
  }


  if(
    [
      "abspath()",
      "basename()",
      "dirname()",
      "join()"
    ].includes(n)
  ){

    const target =
      val(
        "path",
        selectedPath || ""
      );

    let result = "";

    if(n === "abspath()"){

      result =
        `C:/PythonLab/${
          normalizeVirtualPath(target)
        }`;
    }

    else if(n === "basename()"){

      result =
        target
          .split(/[\\/]/)
          .filter(Boolean)
          .pop() || "";
    }

    else if(n === "dirname()"){

      const parts =
        normalizeVirtualPath(target)
          .split("/")
          .filter(Boolean);

      parts.pop();

      result =
        parts.length
          ? parts.join("/")
          : ".";
    }

    else {

      const a =
        val("a","");

      const b =
        val("b","");

      result =
        normalizeVirtualPath(
          `${a}/${b}`
        );
    }

    $("resultBody").innerHTML = `
      <code dir="ltr">
        ${escapeHtml(result)}
      </code>
    `;

    $("resultStatus").textContent =
      "CALCULATED ✓";

    return true;
  }


  if(n === "getsize()"){

    const target =
      val(
        "path",
        selectedPath || ""
      );

    const x =
      getNode(target);

    $("resultBody").innerHTML = `
      <b>
        ${
          x && x.type==="file"
            ? escapeHtml(x.size || "1 KB")
            : "File not found"
        }
      </b>
    `;

    $("resultStatus").textContent =
      "READ STATE ✓";

    return true;
  }


  /* =====================================================
     PATHLIB
     ===================================================== */

  if(n === "Path()"){

    const target =
      val(
        "path",
        selectedPath || "."
      );

    const normalized =
      normalizeVirtualPath(target);

    const node =
      getNode(normalized);

    $("resultBody").innerHTML = `
      <div class="live-success">
        ◈ Path object ساخته شد
      </div>

      <p>
        <code dir="ltr">
          Path(${JSON.stringify(target)})
        </code>
      </p>

      <div class="state-list">

        <span>
          نوع:
          ${
            node
              ? node.type === "folder"
                ? "پوشه"
                : "فایل"
              : "مسیر ناموجود"
          }
        </span>

        <span>
          وجود دارد:
          <b>
            ${!!node}
          </b>
        </span>

        <span>
          نام:
          ${escapeHtml(getNodeName(target))}
        </span>

      </div>
    `;

    $("resultStatus").textContent =
      "PATH CREATED ✓";

    renderLiveLog(
      `Path("${target}")`
    );

    return true;
  }


  if(
    [
      "exists()",
      "is_file()",
      "is_dir()"
    ].includes(n)
  ){

    const target =
      val(
        "path",
        selectedPath || ""
      );

    const x =
      getNode(target);

    let result = false;

    if(n === "exists()")
      result = !!x;

    if(n === "is_file()")
      result =
        !!x &&
        x.type === "file";

    if(n === "is_dir()")
      result =
        !!x &&
        x.type === "folder";

    $("resultBody").innerHTML = `
      <code dir="ltr">
        Path(${JSON.stringify(target)}).${n}
      </code>

      <br>

      <b class="${result?"live-true":""}">
        ${result}
      </b>

      <p>
        ${
          result
            ? "مسیر در Virtual File System وجود دارد."
            : "چنین مسیر یا فایلی در محیط نمایشی وجود ندارد."
        }
      </p>
    `;

    $("resultStatus").textContent =
      "READ STATE ✓";

    renderLiveLog(
      `Path("${target}").${n}`
    );

    return true;
  }


  if(n === "glob()"){

    const basePath =
      val(
        "path",
        currentExplorerPath || "."
      );

    const pattern =
      val(
        "pattern",
        "*.txt"
      );

    const base =
      getNode(basePath);

    if(
      !base ||
      base.type !== "folder"
    ){

      $("resultBody").innerHTML = `
        <div class="live-error">
          ✕ مسیر
          «${escapeHtml(basePath)}»
          یک پوشه نیست.
        </div>
      `;

      $("resultStatus").textContent =
        "ERROR ✕";

      return true;
    }

    const matches =
      (base.children || [])
        .filter(x =>
          simplePatternMatch(
            x.name,
            pattern
          )
        )
        .map(x => {

          const cleanBase =
            normalizeVirtualPath(
              basePath
            );

          return cleanBase
            ? `${cleanBase}/${x.name}`
            : x.name;
        });

    $("resultBody").innerHTML = `
      <div class="live-success">
        🔎 جست‌وجوی الگو انجام شد
      </div>

      <p>
        مسیر:
        <code dir="ltr">
          ${escapeHtml(basePath || ".")}
        </code>

        <br>

        الگو:
        <code dir="ltr">
          ${escapeHtml(pattern)}
        </code>
      </p>

      <div class="state-list">

        ${
          matches.length
            ? matches.map(x =>
                `<span>
                  📄 ${escapeHtml(x)}
                </span>`
              ).join("")
            : "<span>موردی پیدا نشد.</span>"
        }

      </div>
    `;

    $("resultStatus").textContent =
      "SEARCHED ✓";

    renderLiveLog(
      `Path("${basePath}").glob("${pattern}")`
    );

    return true;
  }


  if(n === "iterdir()"){

    const target =
      val(
        "path",
        currentExplorerPath || "."
      );

    const folder =
      getNode(target);

    if(
      !folder ||
      folder.type !== "folder"
    ){

      $("resultBody").innerHTML = `
        <div class="live-error">
          ✕ این مسیر پوشه نیست.
        </div>
      `;

      $("resultStatus").textContent =
        "ERROR ✕";

      return true;
    }

    const children =
      folder.children || [];

    $("resultBody").innerHTML = `
      <div class="state-list">

        ${
          children.length
            ? children.map(x =>
                `<span>
                  ${
                    x.type==="folder"
                      ? "📁 "
                      : "📄 "
                  }
                  ${escapeHtml(x.name)}
                </span>`
              ).join("")
            : "<span>پوشه خالی است.</span>"
        }

      </div>
    `;

    $("resultStatus").textContent =
      "READ STATE ✓";

    return true;
  }


  if(n === "read_text()"){

    const target =
      val(
        "path",
        selectedPath || ""
      );

    const node =
      getNode(target);

    if(
      !node ||
      node.type !== "file"
    ){

      $("resultBody").innerHTML = `
        <div class="live-error">
          ✕ فایل پیدا نشد.
        </div>
      `;

      $("resultStatus").textContent =
        "ERROR ✕";

      return true;
    }

    const content =
      node.content ??
      "Hello Python!";

    $("resultBody").innerHTML = `
      <div class="live-success">
        📄 محتوای فایل:
      </div>

      <pre
        dir="ltr"
        style="white-space:pre-wrap"
      >${escapeHtml(content)}</pre>
    `;

    $("resultStatus").textContent =
      "FILE READ ✓";

    return true;
  }


  if(n === "write_text()"){

    const target =
      val(
        "path",
        selectedPath || ""
      );

    const text =
      val(
        "text",
        "Hello Python"
      );

    let node =
      getNode(target);

    if(!node){

      const normalized =
        normalizeVirtualPath(target);

      const parts =
        splitVirtualPath(normalized);

      if(!parts.length){

        toast(
          "نام فایل را وارد کن."
        );

        return true;
      }

      const filename =
        parts.pop();

      const parentPath =
        parts.join("/");

      const parent =
        getNode(parentPath);

      if(
        !parent ||
        parent.type !== "folder"
      ){

        toast(
          "پوشه مقصد وجود ندارد."
        );

        return true;
      }

      node =
        createVirtualFile(filename);

      node.content = text;

      parent.children.push(node);

    }else{

      if(node.type !== "file"){

        toast(
          "مسیر انتخاب‌شده فایل نیست."
        );

        return true;
      }

      node.content = text;
    }

    node.size =
      `${Math.max(1,text.length)} B`;

    selectedPath =
      normalizeVirtualPath(target);

    renderFileExplorer();

    renderLiveLog(
      `Path("${target}").write_text(...)`
    );

    $("resultBody").innerHTML = `
      <div class="live-success">
        ✓ متن در فایل نوشته شد.
      </div>

      <p>
        تعداد کاراکترها:
        <b>${text.length}</b>
      </p>
    `;

    $("resultStatus").textContent =
      "FILE WRITTEN ✓";

    return true;
  }


  if(n === "mkdir()"){

    const target =
      val(
        "path",
        selectedPath || ""
      );

    const folder =
      createFolderPath(target);

    if(!folder){

      toast(
        "ساخت پوشه انجام نشد."
      );

      return true;
    }

    currentExplorerPath =
      normalizeVirtualPath(target);

    renderFileExplorer();

    $("resultBody").innerHTML = `
      <div class="live-success">
        📁 پوشه ساخته شد.
      </div>
    `;

    $("resultStatus").textContent =
      "FOLDER CREATED ✓";

    return true;
  }


  if(n === "rename()"){

    const source =
      val(
        "path",
        selectedPath || ""
      );

    const target =
      val(
        "target",
        "new_name"
      );

    const node =
      getNode(source);

    if(!node){

      toast(
        "مسیر پیدا نشد."
      );

      return true;
    }

    const parent =
      getParentNode(source);

    if(!parent){

      toast(
        "پوشه والد پیدا نشد."
      );

      return true;
    }

    const oldName =
      node.name;

    node.name =
      normalizeVirtualPath(target)
        .split("/")
        .pop();

    selectedPath =
      currentExplorerPath
        ? `${currentExplorerPath}/${node.name}`
        : node.name;

    renderFileExplorer();

    $("resultBody").innerHTML = `
      <div class="live-success">
        ✓ «${escapeHtml(oldName)}»
        به
        «${escapeHtml(node.name)}»
        تغییر کرد.
      </div>
    `;

    $("resultStatus").textContent =
      "RENAMED ✓";

    return true;
  }


  if(
    ["suffix","name"].includes(n)
  ){

    const target =
      val(
        "path",
        selectedPath || ""
      );

    let result = "";

    if(n === "suffix"){

      const filename =
        target
          .split(/[\\/]/)
          .filter(Boolean)
          .pop() || "";

      const index =
        filename.lastIndexOf(".");

      result =
        index > 0
          ? filename.slice(index)
          : "";
    }

    else {

      result =
        target
          .split(/[\\/]/)
          .filter(Boolean)
          .pop() || "";
    }

    $("resultBody").innerHTML = `
      <code dir="ltr">
        ${escapeHtml(result)}
      </code>
    `;

    $("resultStatus").textContent =
      "CALCULATED ✓";

    return true;
  }


  /* =====================================================
     SHUTIL
     ===================================================== */

  if(
    [
      "copy()",
      "copy2()",
      "move()"
    ].includes(n)
  ){

    const src =
      val(
        "src",
        selectedPath || ""
      );

    const dst =
      val("dst","");

    const sourceNode =
      getNode(src);

    if(!sourceNode){

      toast(
        `«${src}» پیدا نشد.`
      );

      return true;
    }

    if(!dst){

      toast(
        "مقصد را وارد کن."
      );

      return true;
    }

    const destination =
      buildDestinationPath(
        src,
        dst
      );

    if(!destination){

      toast(
        "مقصد معتبر نیست."
      );

      return true;
    }

    const existing =
      getNode(destination);

    if(existing){

      toast(
        "فایل یا پوشه مقصد از قبل وجود دارد."
      );

      return true;
    }

    if(n === "move()"){

      const moved =
        cloneNode(sourceNode);

      removeNode(src);

      if(!insertNode(destination,moved)){

        toast(
          "انتقال انجام نشد."
        );

        return true;
      }

    }else{

      const copy =
        cloneNode(sourceNode);

      if(!insertNode(destination,copy)){

        toast(
          "کپی انجام نشد."
        );

        return true;
      }
    }

    selectedPath =
      destination;

    renderFileExplorer();

    renderLiveLog(
      `${n} ${src} → ${destination}`
    );

    $("resultBody").innerHTML = `
      <div class="live-success">

        ✓
        ${
          n==="move()"
            ? "آیتم جابه‌جا شد"
            : "یک کپی ایجاد شد"
        }

      </div>

      <p>
        <code dir="ltr">
          shutil.${
            n.slice(0,-2)
          }(
          ${JSON.stringify(src)},
          ${JSON.stringify(destination)}
          )
        </code>
      </p>
    `;

    $("resultStatus").textContent =
      "STATE UPDATED ✓";

    return true;
  }


  if(n === "copytree()"){

    const src =
      val("src","Demo");

    const dst =
      val("dst","DemoCopy");

    const source =
      getNode(src);

    if(
      !source ||
      source.type !== "folder"
    ){

      toast(
        `پوشه «${src}» پیدا نشد.`
      );

      return true;
    }

    const destination =
      normalizeVirtualPath(dst);

    if(getNode(destination)){

      toast(
        "پوشه مقصد از قبل وجود دارد."
      );

      return true;
    }

    const copy =
      cloneNode(source);

    copy.name =
      getNodeName(destination);

    if(!insertNode(destination,copy)){

      toast(
        "کپی پوشه انجام نشد."
      );

      return true;
    }

    selectedPath =
      destination;

    renderFileExplorer();

    renderLiveLog(
      `shutil.copytree("${src}","${dst}")`
    );

    $("resultBody").innerHTML = `
      <div class="live-success">
        📁 پوشه
        «${escapeHtml(dst)}»
        کپی شد.
      </div>
    `;

    $("resultStatus").textContent =
      "FOLDER COPIED ✓";

    return true;
  }


  if(n === "rmtree()"){

    const target =
      val("path");

    const node =
      getNode(target);

    if(
      !node ||
      node.type !== "folder"
    ){

      toast(
        `پوشه «${target}» پیدا نشد.`
      );

      return true;
    }

    removeNode(target);

    if(
      currentExplorerPath ===
      normalizeVirtualPath(target) ||
      currentExplorerPath.startsWith(
        normalizeVirtualPath(target) + "/"
      )
    ){

      currentExplorerPath = "";
    }

    selectedPath = null;

    renderFileExplorer();

    renderLiveLog(
      `shutil.rmtree("${target}")`
    );

    $("resultBody").innerHTML = `
      <div class="live-success">
        ✓ پوشه «${escapeHtml(target)}»
        و محتویات نمایشی آن حذف شد.
      </div>
    `;

    $("resultStatus").textContent =
      "STATE UPDATED ✓";

    return true;
  }


  if(n === "which()"){

    const cmd =
      val(
        "cmd",
        "python"
      );

    $("resultBody").innerHTML = `
      <code dir="ltr">
        C:/Python311/${escapeHtml(cmd)}.exe
      </code>
    `;

    $("resultStatus").textContent =
      "SIMULATED ✓";

    return true;
  }


  /* =====================================================
     SEND2TRASH
     ===================================================== */

  if(n === "send2trash()"){

    const target =
      val(
        "path",
        selectedPath || ""
      );

    const node =
      getNode(target);

    if(!node){

      toast(
        `«${target}» پیدا نشد.`
      );

      return true;
    }

    removeNode(target);

    selectedPath = null;

    renderFileExplorer();

    renderLiveLog(
      `send2trash("${target}") → سطل زباله`
    );

    $("resultBody").innerHTML = `
      <div class="live-success">
        ♻ «${escapeHtml(target)}»
        به سطل زباله نمایشی منتقل شد.
      </div>

      <p>
        فایل از محیط فعال حذف شد ولی
        این شبیه‌ساز سطل زباله واقعی سیستم را تغییر نمی‌دهد.
      </p>
    `;

    $("resultStatus").textContent =
      "TRASHED ✓";

    return true;
  }


  /* =====================================================
     FNMATCH
     ===================================================== */

  if(n === "fnmatch()"){

    const name =
      val("name","");

    const pattern =
      val(
        "pattern",
        "*.txt"
      );

    const result =
      simplePatternMatch(
        name,
        pattern
      );

    $("resultBody").innerHTML = `
      <code dir="ltr">
        fnmatch(
        ${JSON.stringify(name)},
        ${JSON.stringify(pattern)}
        )
      </code>

      <br>

      نتیجه:
      <b class="live-true">
        ${result}
      </b>
    `;

    $("resultStatus").textContent =
      "EXECUTED ✓";

    return true;
  }


  if(n === "filter()"){

    const pattern =
      val(
        "pattern",
        "*.txt"
      );

    const names =
      getNode(".")?.children
        ?.map(x => x.name)
        .filter(x =>
          simplePatternMatch(
            x,
            pattern
          )
        ) || [];

    $("resultBody").innerHTML = `
      <div class="state-list">

        ${
          names.length
            ? names.map(x =>
                `<span>
                  ${escapeHtml(x)}
                </span>`
              ).join("")
            : "<span>موردی پیدا نشد.</span>"
        }

      </div>
    `;

    $("resultStatus").textContent =
      "FILTERED ✓";

    return true;
  }


  /* =====================================================
     FILECMP
     ===================================================== */

  if(
    ["cmp()","samefile()"].includes(n)
  ){

    const f1 =
      val("f1","");

    const f2 =
      val("f2","");

    const node1 =
      getNode(f1);

    const node2 =
      getNode(f2);

    let result = false;

    if(
      node1 &&
      node2 &&
      node1.type === "file" &&
      node2.type === "file"
    ){

      result =
        JSON.stringify(node1) ===
        JSON.stringify(node2);
    }

    $("resultBody").innerHTML = `
      <code dir="ltr">
        ${escapeHtml(f1)}
        ↔
        ${escapeHtml(f2)}
      </code>

      <br>

      نتیجه:
      <b>${result}</b>
    `;

    $("resultStatus").textContent =
      "COMPARED ✓";

    return true;
  }


  if(n === "dircmp()"){

    $("resultBody").innerHTML = `
      <div class="live-success">
        ≋ ساختار دو پوشه مقایسه شد.
      </div>
    `;

    $("resultStatus").textContent =
      "COMPARED ✓";

    return true;
  }


  /* =====================================================
     HASHLIB
     ===================================================== */

  if(
    [
      "sha256()",
      "sha512()",
      "sha1()",
      "md5()"
    ].includes(n)
  ){

    const data =
      val(
        "data",
        "Hello Python"
      );

    const lengths = {
      "sha256()":64,
      "sha512()":128,
      "sha1()":40,
      "md5()":32
    };

    const len =
      lengths[n];

    const fakeHash =
      makeFakeHash(
        data,
        len
      );

    $("resultBody").innerHTML = `
      <div class="preview-progress">
        <i style="width:100%"></i>
      </div>

      <p>
        الگوریتم:
        <b>
          ${escapeHtml(n)}
        </b>
      </p>

      <code dir="ltr">
        ${fakeHash}
      </code>
    `;

    $("resultStatus").textContent =
      "HASH CREATED ✓";

    return true;
  }


  if(n === "hexdigest()"){

    $("resultBody").innerHTML = `
      <code dir="ltr">
        185f8db32271fe25f561a6fc938b2e264306ec304eda518007d1764826381969
      </code>
    `;

    $("resultStatus").textContent =
      "HASH DISPLAYED ✓";

    return true;
  }


  /* =====================================================
     MIMETYPES
     ===================================================== */

  if(n === "guess_type()"){

    const filename =
      val(
        "url",
        selectedPath ||
        "report.pdf"
      );

    const ext =
      filename
        .toLowerCase()
        .split(".")
        .pop();

    const map = {
      pdf:"application/pdf",
      txt:"text/plain",
      html:"text/html",
      css:"text/css",
      js:"text/javascript",
      json:"application/json",
      csv:"text/csv",
      jpg:"image/jpeg",
      jpeg:"image/jpeg",
      png:"image/png",
      mp3:"audio/mpeg",
      mp4:"video/mp4",
      docx:"application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      xlsx:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      pptx:"application/vnd.openxmlformats-officedocument.presentationml.presentation"
    };

    $("resultBody").innerHTML = `
      <code dir="ltr">
        ${escapeHtml(filename)}
      </code>

      →

      <b>
        ${map[ext] || "unknown"}
      </b>
    `;

    $("resultStatus").textContent =
      "MIME DETECTED ✓";

    return true;
  }


  if(n === "guess_extension()"){

    const type =
      val(
        "type",
        "application/pdf"
      );

    const map = {
      "application/pdf":".pdf",
      "text/plain":".txt",
      "text/html":".html",
      "text/css":".css",
      "application/json":".json",
      "image/jpeg":".jpg",
      "image/png":".png",
      "audio/mpeg":".mp3",
      "video/mp4":".mp4"
    };

    $("resultBody").innerHTML = `
      <b>
        ${map[type] || ".bin"}
      </b>
    `;

    $("resultStatus").textContent =
      "EXTENSION FOUND ✓";

    return true;
  }


  /* =====================================================
     TEMPFILE
     ===================================================== */

  if(
    [
      "TemporaryDirectory()",
      "TemporaryFile()",
      "NamedTemporaryFile()",
      "mkstemp()",
      "mkdtemp()"
    ].includes(n)
  ){

    const name =
      n.includes("Directory")
        ? "tmp_python_lab"
        : "tmp_file.tmp";

    $("resultBody").innerHTML = `
      <div class="live-success">
        ✓ منبع موقت ساخته شد
      </div>

      <code dir="ltr">
        ${name}
      </code>
    `;

    $("resultStatus").textContent =
      "TEMP CREATED ✓";

    return true;
  }


  /* =====================================================
     TIME
     ===================================================== */

  if(n === "sleep()"){

    const seconds =
      Number(
        val(
          "seconds",
          "2"
        )
      );

    $("resultBody").innerHTML = `
      ⏱ تأخیر شبیه‌سازی‌شده:
      <b>
        ${seconds} ثانیه
      </b>

      <div class="preview-progress">
        <i style="width:100%"></i>
      </div>
    `;

    $("resultStatus").textContent =
      "SIMULATED ✓";

    return true;
  }


  if(
    [
      "time()",
      "perf_counter()",
      "monotonic()"
    ].includes(n)
  ){

    $("resultBody").innerHTML = `
      <code dir="ltr">
        ${(performance.now()/1000).toFixed(6)}
      </code>
    `;

    $("resultStatus").textContent =
      "TIME READ ✓";

    return true;
  }


  if(n === "ctime()"){

    $("resultBody").innerHTML =
      `<b>${new Date().toString()}</b>`;

    $("resultStatus").textContent =
      "TIME CONVERTED ✓";

    return true;
  }


  if(n === "strftime()"){

    $("resultBody").innerHTML =
      `<b>${new Date().toLocaleString("fa-IR")}</b>`;

    $("resultStatus").textContent =
      "FORMATTED ✓";

    return true;
  }


  /* =====================================================
     SYS / PLATFORM
     ===================================================== */

  if(
    [
      "platform.system()",
      "platform.python_version()",
      "platform.machine()",
      "platform.processor()",
      "sys.version",
      "sys.platform",
      "sys.executable",
      "sys.argv"
    ].includes(n)
  ){

    const values = {

      "platform.system()":
        "Windows",

      "platform.python_version()":
        "3.11.x",

      "platform.machine()":
        "AMD64",

      "platform.processor()":
        "PythonLab CPU",

      "sys.version":
        "3.11.x",

      "sys.platform":
        "win32",

      "sys.executable":
        "C:/Python311/python.exe",

      "sys.argv":
        "['main.py']"
    };

    $("resultBody").innerHTML = `
      <code dir="ltr">
        ${escapeHtml(values[n])}
      </code>
    `;

    $("resultStatus").textContent =
      "SYSTEM INFO ✓";

    return true;
  }


  /* =====================================================
     SQLITE
     ===================================================== */

  if(
    [
      "connect()",
      "cursor()",
      "execute()",
      "executemany()",
      "fetchone()",
      "fetchall()",
      "commit()",
      "rollback()",
      "close()"
    ].includes(n)
  ){

    $("resultBody").innerHTML = `
      <div class="live-success">
        🗄 SQLite operation simulated successfully.
      </div>

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

    $("resultStatus").textContent =
      "SQL SIMULATED ✓";

    return true;
  }


  /* =====================================================
     PANDAS
     ===================================================== */

  if(
    [
      "read_csv()",
      "read_excel()",
      "DataFrame()",
      "head()",
      "tail()",
      "sort_values()",
      "groupby()",
      "describe()",
      "info()"
    ].includes(n)
  ){

    $("resultBody").innerHTML = `
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

    $("resultStatus").textContent =
      "DATAFRAME SIMULATED ✓";

    return true;
  }


  /* =====================================================
     EXCEL
     ===================================================== */

  if(
    [
      "Workbook()",
      "load_workbook()",
      "active",
      "cell()",
      "append()",
      "save()",
      "create_sheet()",
      "remove()",
      "max_row",
      "max_column"
    ].includes(n)
  ){

    $("resultBody").innerHTML = `
      📊 <b>students.xlsx</b>

      <br>

      <span style="color:#7e8aa5">
        Sheet1 → 3 rows → 3 columns
      </span>
    `;

    $("resultStatus").textContent =
      "EXCEL SIMULATED ✓";

    return true;
  }


  /* =====================================================
     IO
     ===================================================== */

  if(
    [
      "StringIO()",
      "BytesIO()",
      "read()",
      "write()",
      "seek()",
      "tell()",
      "getvalue()"
    ].includes(n)
  ){

    $("resultBody").innerHTML = `
      <div class="live-success">
        ↯ عملیات جریان داده انجام شد.
      </div>

      <code dir="ltr">
        Hello Python
      </code>
    `;

    $("resultStatus").textContent =
      "STREAM SIMULATED ✓";

    return true;
  }


  /* =====================================================
     WATCHDOG
     ===================================================== */

  if(
    [
      "Observer",
      "schedule()",
      "start()",
      "stop()",
      "join()",
      "on_created()",
      "on_deleted()",
      "on_modified()",
      "on_moved()"
    ].includes(n)
  ){

    $("resultBody").innerHTML = `
      👁 <b>File watcher active</b>

      <br>

      <span style="color:#31d5c8">
        event: modified → report.xlsx
      </span>
    `;

    $("resultStatus").textContent =
      "WATCHER SIMULATED ✓";

    return true;
  }


  /* =====================================================
     SCHEDULE
     ===================================================== */

  if(
    [
      "every()",
      "seconds",
      "minutes",
      "hours",
      "days",
      "weeks",
      "do()",
      "run_pending()",
      "clear()",
      "cancel_job()"
    ].includes(n)
  ){

    $("resultBody").innerHTML = `
      ◷ <b>Scheduled Job</b>

      <br>

      <span style="color:#31d5c8">
        job registered successfully
      </span>
    `;

    $("resultStatus").textContent =
      "SCHEDULED ✓";

    return true;
  }


  /* =====================================================
     REQUESTS / HTTPX
     ===================================================== */

  if(
    [
      "get()",
      "post()",
      "put()",
      "delete()",
      "request()"
    ].includes(n)
  ){

    $("resultBody").innerHTML = `
      <div class="live-success">
        🌐 HTTP request simulated
      </div>

      <p>
        Status:
        <b style="color:#6ee7d8">
          200 OK
        </b>
      </p>
    `;

    $("resultStatus").textContent =
      "HTTP SIMULATED ✓";

    return true;
  }


  if(
    [
      "status_code",
      "json()",
      "text",
      "headers",
      "raise_for_status()"
    ].includes(n)
  ){

    $("resultBody").innerHTML = `
      <code dir="ltr">

        ${
          n==="status_code"
            ? "200"
            : n==="json()"
              ? '{"status":"ok"}'
              : n==="text"
                ? "Hello from server"
                : '{"Content-Type":"application/json"}'
        }

      </code>
    `;

    $("resultStatus").textContent =
      "RESPONSE READ ✓";

    return true;
  }


  /* =====================================================
     DOCX
     ===================================================== */

  if(
    [
      "Document()",
      "add_paragraph()",
      "add_heading()",
      "add_table()",
      "add_page_break()",
      "add_picture()",
      "save()"
    ].includes(n)
  ){

    $("resultBody").innerHTML = `
      📘 <b>Word Document</b>

      <br>

      <span style="color:#7e8aa5">
        عملیات Word با موفقیت شبیه‌سازی شد.
      </span>
    `;

    $("resultStatus").textContent =
      "WORD SIMULATED ✓";

    return true;
  }


  /* =====================================================
     PPTX
     ===================================================== */

  if(
    [
      "Presentation()",
      "add_slide()",
      "add_textbox()",
      "add_picture()",
      "slide_layouts"
    ].includes(n)
  ){

    $("resultBody").innerHTML = `
      📊 <b>PowerPoint Presentation</b>

      <br>

      <span style="color:#7e8aa5">
        عملیات PowerPoint شبیه‌سازی شد.
      </span>
    `;

    $("resultStatus").textContent =
      "PPTX SIMULATED ✓";

    return true;
  }


  /* =====================================================
     DEFAULT
     ===================================================== */

  return false;
}


/* =========================================================
   HELPERS
   ========================================================= */

function simplePatternMatch(name,pattern){

  const escaped =
    String(pattern)
      .replace(
        /[.+^${}()|[\]\\]/g,
        "\\$&"
      )
      .replace(
        /\*/g,
        ".*"
      )
      .replace(
        /\?/g,
        "."
      );

  return new RegExp(
    "^" +
    escaped +
    "$",
    "i"
  ).test(
    String(name)
  );
}


function makeFakeHash(text,length){

  let seed = 0;

  for(let i=0;i<text.length;i++)
    seed =
      (
        seed * 31 +
        text.charCodeAt(i)
      ) >>> 0;

  let result = "";

  for(let i=0;i<length;i++){

    seed =
      (
        seed * 1664525 +
        1013904223
      ) >>> 0;

    result +=
      (
        seed % 16
      ).toString(16);
  }

  return result;
}


/* =========================================================
   MODAL
   ========================================================= */

function openModal(t,l){

  $("modalTitle").textContent =
    t[0];

  $("modalDesc").textContent =
    t[1];

  $("modalSignature").textContent =
    t[2];

  $("modalWhat").textContent =
    t[1];

  $("modalArgs").textContent =
    t[3];

  $("modalType").textContent =
    l.name;

  $("modalOutput").textContent =
    t[4];

  $("modalBackdrop")
    .classList
    .add("open");
}


function closeModal(){

  $("modalBackdrop")
    .classList
    .remove("open");
}


/* =========================================================
   COPY
   ========================================================= */

function copyCode(){

  const text =
    $("generatedCode")?.textContent || "";

  if(navigator.clipboard){

    navigator.clipboard
      .writeText(text)
      .then(() =>
        toast("کد کپی شد.")
      )
      .catch(() =>
        toast("کپی انجام نشد.")
      );
  }

  else {

    toast(
      "مرورگر اجازه کپی خودکار نداد."
    );
  }
}


/* =========================================================
   UI
   ========================================================= */

function toast(msg){

  const t =
    $("toast");

  if(!t)
    return;

  t.textContent =
    msg;

  t.classList.add("show");

  setTimeout(
    () =>
      t.classList.remove("show"),
    1800
  );
}


function escapeHtml(s){

  return String(s).replace(
    /[&<>"']/g,
    m => ({
      "&":"&amp;",
      "<":"&lt;",
      ">":"&gt;",
      '"':"&quot;",
      "'":"&#039;"
    }[m])
  );
}


/* =========================================================
   START
   ========================================================= */

init();
