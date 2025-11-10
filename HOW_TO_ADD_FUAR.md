# How to Add Your First Trade Show (Fuar)

## 🎯 Quick Start Guide

The sample entry has been removed. Now you can create your own trade shows through the Keystatic CMS!

---

## 📝 Step-by-Step: Creating Your First Fuar

### Step 1: Access Keystatic CMS
1. Go to: `http://localhost:3000/keystatic`
2. Click on **"Trade Shows / Fuarlar"** in the left sidebar
3. You should see "0 entries" (this is correct!)

### Step 2: Create New Entry
1. Click the **"Create Entry"** button (top right)
2. A form will appear with all the fields

### Step 3: Fill Required Fields ⚠️

**These fields are REQUIRED:**
- **📌 Trade Show Name / Fuar Adı**: e.g., "Istanbul Tech Summit"
- **🔗 Slug / URL Adresi**: e.g., "istanbul-tech-summit" (lowercase, no spaces)
- **📅 Start Date**: Select from calendar
- **📅 End Date**: Select from calendar
- **🏭 Sector/Industry**: e.g., "Technology", "Healthcare", "Automotive"
- **🏢 Venue Name**: e.g., "Istanbul Convention Center"
- **🌆 City**: e.g., "Istanbul"
- **🌍 Country**: e.g., "Turkey"

### Step 4: Set Status ✅

**IMPORTANT:** Change status from "Draft" to one of these:
- **"Published / Yayınlandı"** - To show it immediately
- **"Upcoming / Yaklaşan"** - For future events
- **"Ongoing / Devam Ediyor"** - For currently active events

**Note:** Draft entries will NOT appear on the website!

### Step 5: Fill Main Content 📝

1. Scroll down to find **"📝 MAIN CONTENT / ANA İÇERİK"**
2. This is where you write the detailed description
3. You can use:
   - Headers (Heading 1, Heading 2, etc.)
   - Bold, italic text
   - Bullet lists
   - Links
   - Images

### Step 6: Optional Fields (Recommended)

**Make it look better by adding:**
- **💬 Subtitle**: Brief description (shows on cards)
- **⭐ Featured Event**: Check this to show on homepage
- **👔 Organizer Name**: Who's organizing the event
- **🌐 Website**: Official event website
- **🏷️ Tags**: Add keywords for SEO (one per line)

**For better maps:**
- **📍 Latitude**: GPS coordinate (e.g., "41.0082")
- **📍 Longitude**: GPS coordinate (e.g., "28.9784")

**For better visuals:**
- **🖼️ Logo URL**: Link to event logo
- **🖼️ Cover Image URL**: Link to cover image

### Step 7: Save!

1. Click **"Create"** button at the top
2. Your entry is saved!
3. Go to `http://localhost:3000/fuars` to see it live

---

## ✅ Example: Creating "Istanbul Tech Summit"

Here's a complete example you can use as a template:

```
📌 Trade Show Name: Istanbul Tech Summit
🔗 Slug: istanbul-tech-summit
💬 Subtitle: Turkey's Leading Technology Conference
📅 Start Date: 2026-10-15
📅 End Date: 2026-10-18
✅ Status: Upcoming / Yaklaşan
⭐ Featured: ✓ (check this!)

📝 MAIN CONTENT:
## About Istanbul Tech Summit

Istanbul Tech Summit is Turkey's premier technology conference, bringing together entrepreneurs, investors, and tech enthusiasts from around the world.

## What to Expect

- Keynote speeches from industry leaders
- Networking opportunities
- Startup exhibitions
- Tech workshops

## Registration

Visit our website for early bird tickets!

---

🏭 Sector: Technology & Innovation
🔄 Frequency: Yearly
🏢 Venue: Istanbul Congress Center
📍 Venue Address: Harbiye, Istanbul
🌆 City: Istanbul
🌍 Country: Turkey
📍 Latitude: 41.0082
📍 Longitude: 28.9784

👔 Organizer Name: Tech Turkey
🌐 Website: https://example.com

🏷️ Tags:
- Technology
- Innovation
- Startups
- Turkey
```

---

## 🔍 Troubleshooting

### "I created an entry but it's not showing on the website"
**Check:**
- Is the status set to "Published", "Upcoming", or "Ongoing"?
- Did you fill all required fields?
- Try refreshing the `/fuars` page

### "I can't see the content editor"
**Solution:**
- Scroll down on the form
- Look for "📝 MAIN CONTENT / ANA İÇERİK"
- It might be in a separate panel on the right side

### "The entry shows in Keystatic but not on the website"
**Solution:**
1. Make sure status is NOT "Draft" or "Completed"
2. Refresh your browser (Ctrl+F5 or Cmd+Shift+R)
3. Check the browser console for errors (F12)

---

## 🎨 Making an Entry "Featured"

To show your fuar on the homepage:

1. Edit the entry in Keystatic
2. Find **"⭐ Featured Event / Öne Çıkan Etkinlik"**
3. Check the box ✓
4. Save
5. The fuar will now appear in the orange section on homepage!

---

## 📊 URLs After Creation

When you create a fuar with slug "istanbul-tech-summit":

- **Detail Page**: `/fuars/istanbul-tech-summit`
- **Listing Page**: `/fuars`
- **CMS Edit**: `/keystatic/collection/fuars/item/istanbul-tech-summit`

---

## 💡 Pro Tips

1. **Use good slugs**: Keep them short, lowercase, use hyphens
   - ✅ Good: `istanbul-tech-summit`
   - ❌ Bad: `Istanbul Tech Summit 2026!!!`

2. **Add GPS coordinates**: Get them from Google Maps
   - Right-click on location → "What's here?"
   - Copy the coordinates

3. **Use featured wisely**: Don't make everything featured!
   - Only highlight 2-3 most important events

4. **Fill the subtitle**: This shows in preview cards
   - Keep it short (1-2 sentences)

5. **Add multiple tags**: Helps with SEO
   - Technology, Innovation, Turkey, Istanbul, etc.

---

## 🚀 Next Steps

1. Create your first entry in Keystatic
2. Set it to "Published" or "Upcoming"
3. Check it appears on `/fuars`
4. Make it "Featured" to show on homepage
5. Repeat for more events!

---

**Good luck! / Başarılar!** 🎉

If you still have issues, check the browser console (F12) for error messages.
