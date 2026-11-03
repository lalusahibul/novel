[English](README.md) | [Bahasa Indonesia](README.id.md)
# Custom Novel Upload Guide

If you want to upload your own novel, a few adjustments are required to ensure it works correctly with the simulator.

### 1. Prepare Your Novel
Prepare your novel in `.txt` (plain text) format.

### 2. Chapter Titles
Add the `~` symbol at the beginning of each chapter title.

**Example:**
```text
~Chapter 1: The Beginning
```

### 3. Paragraph Formatting
Add the `~~` symbol at the beginning of every new paragraph.

**Example:**
```text
~~The morning sun slowly rose above the horizon, illuminating the quiet village.

~~A gentle breeze swept through the trees as the villagers began their daily activities.
```

### 4. Complete Formatted Example

Below is an example of how your novel should look inside the `.txt` file:

```text
~Chapter 1: The Beginning

~~The morning sun slowly rose above the horizon, casting golden rays across the quiet village.

~~John opened his eyes and slowly got out of bed. Today was going to be different from any other day.

~~He walked toward the window and looked outside. The streets were unusually quiet, and a strange feeling began to grow inside him.

~Chapter 2: The Mysterious Stranger

~~As John walked through the village, he noticed a strange figure standing near the old wooden bridge.

~~The stranger wore a long black coat and a wide-brimmed hat. His face was hidden in the shadows.

~~"Excuse me," John called out. "Are you looking for someone?"

~~The stranger slowly turned around but remained silent.
```

### Important Notes
- Use `.txt` format only.
- Every chapter title must begin with `~`.
- Every new paragraph must begin with `~~`.
- Leave a blank line between paragraphs for better readability.
- Do not use `~` or `~~` as substitutes for the required formatting symbols.
- Follow this structure consistently to ensure the novel is processed correctly by the simulator.