javascript: (function () {
    const accessKey = "ACCESS_KEY";
    const url = `https://www.call2all.co.il/ym/api/GetIncomingSms?token=${encodeURIComponent(accessKey)}&limit=1`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            if (data?.responseStatus === "OK" && data.rows?.length) {
                const sms = data.rows[0];
                const { receive_date, source, message } = sms;
                const matches = message.match(/\b\d{4,7}\b/g) || [];

                let copiedMessages = "";
                matches.forEach(match => {
                    const textarea = document.createElement("textarea");
                    textarea.style.position = "fixed";
                    textarea.style.opacity = 0;
                    textarea.value = match;
                    document.body.appendChild(textarea);
                    textarea.select();
                    document.execCommand("copy");
                    document.body.removeChild(textarea);
                    copiedMessages += `הועתק ללוח: ${match}\n`;
                });

                alert(`בתאריך: ${receive_date}\nהתקבלה הודעה מאת: ${source}\nתוכן ההודעה:\n${message}\n\n${copiedMessages || "לא נמצאו קודים להעתקה"}`);
            } else {
                alert("לא נמצאו הודעות SMS במערכת.");
            }
        })
        .catch(err => {
            alert("שגיאה בבקשה: " + err.message);
        });
})();
