# 📩 Last SMS Bookmarklet v1.0.1

Retrieve and extract verification codes from your most recent SMS message via the Yemot Virtual Plus API — all with one browser bookmark click.

---

## 🇮🇱 תיאור בעברית

`lastSMS.js` הוא קוד JavaScript שנועד לשימוש כסימנייה (Bookmarklet) בדפדפן.  
הסקריפט שואב את הודעת ה-SMS האחרונה ממערכת "וירטואל פלוס" של ימות המשיח ומציג את:

- תאריך קבלה  
- מספר שולח  
- תוכן ההודעה  

בנוסף, הוא מחלץ קודים מספריים (4–7 ספרות) מההודעה ומעתיק אותם אוטומטית ללוח הגזירים.

### 🧩 התקנה כסימנייה בדפדפן

1. העתק את תוכן הקובץ `lastSMS.js`.
2. פתח את מנהל הסימניות (`Ctrl+Shift+O` בכרום/אדג').
3. הוסף סימנייה חדשה, תן לה שם (כגון `SMS אחרון`).
4. הדבק את הקוד בשדה כתובת (URL) — ודא שהוא מתחיל ב־`javascript:`.
5. החלף את ACCESS_KEY במפתח גישה קבוע למערכת (ניתן להפיק בלשונית אבטחה באתר הניהול):
6. שמור ולחץ על הסימנייה בכל עת שתרצה לשלוף את ה-SMS האחרון.

---

## 🇺🇸 English Description

`lastSMS.js` is a JavaScript snippet designed to run as a bookmarklet in your browser.  
It fetches the most recent SMS from the Yemot Virtual Plus API and shows:

- Reception date  
- Sender number  
- Message content  

It also extracts any 4–7 digit numeric codes from the message and copies them to your clipboard.

### 🧩 Installation as a Browser Bookmark

1. Copy the contents of `lastSMS.js`.
2. Open your browser’s Bookmark Manager (`Ctrl+Shift+O`).
3. Add a new bookmark and name it (e.g., `Last SMS`).
4. Paste the code into the **URL** field — make sure it starts with `javascript:`.
5. Replace ACCESS_KEY with a permanent access key for the system (can be generated in the Security tab on the administration site):
6. Save and click the bookmark whenever you want to retrieve the last SMS.

---

## 💡 Credit / קרדיט

Based on a script originally posted by  
[**ivrפון** on FreeIVR forums](https://f2.freeivr.co.il/user/ivr%D7%A4%D7%95%D7%9F)  
Original discussion: [https://f2.freeivr.co.il/topic/15372](https://f2.freeivr.co.il/topic/15372)  
This version builds upon that idea and automates the flow with additional features.

---

## 📁 Files

- `lastSMS.js` – The bookmarklet source code (JavaScript)

---

## 📋 License

MIT License
